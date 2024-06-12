import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Card from "../CardOfPublication";
import Details from "./DetallesOfPublication";
import { useParams, useNavigate } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAtom } from "jotai";
import { publicationsAtom } from "../../context/atoms";
import NoPublications from "./NoPublications";
import Loading from "../Loading";
import { cancel } from "../../utils/icons/index";
function Maps() {
  let { category } = useParams();
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [filteredMarkeres, setFilteredMarkeres] = useState(null);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [parent] = useAutoAnimate();
  const [publications, setPublications] = useAtom(publicationsAtom);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (markers) {
      openMap();
    }
  }, [markers]);

  useEffect(() => {
    let filtered = filteredPublications();

    setTimeout(() => {
      if (filtered.length) {
        setMarkers(filtered);
        setFilteredMarkeres(filtered);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  let filteredPublications = () => {
    if (!publications) return [];
    return publications
      .filter((e) => e.category === category)
      .map((e) => {
        let marker = new mapboxgl.Marker({ color: "green" }).setLngLat([
          e.longitude,
          e.latitude,
        ]);

        return {
          ...e,
          marker: marker,
        };
      });
  };

  let openMap = () => {
    const map = new mapboxgl.Map({
      container: "map",
      center: { lng: -58.4507, lat: -34.6061 },
      zoom: 10.5,
      style: "mapbox://styles/mapbox/streets-v11",
    });
    markers.forEach((e) => e.marker.addTo(map));

    setMap(map);
  };

  const filterPublications = (e) => {
    let zone = e.target.value;

    let filter = markers.filter((e) => {
      if (zone === "todas" || zone === e.zone) {
        e.marker.addTo(map);
        return true;
      } else {
        e.marker.remove();
        return false;
      }
    });
    setFilteredMarkeres(filter);
  };

  const focus = useCallback(
    (id) => {
      let publication = markers.find((e) => e.id === id);
      map.flyTo({
        center: publication.marker.getLngLat(),
        zoom: 14,
        speed: 1.2,
        curve: 1,
        essential: true,
      });
    },
    [markers, map]
  );

  let openDetailsAndClose = (id = null) => {
    if (id) {
      let publication = markers.find((e) => e.id === id);
      setUserDetails(publication);
    }

    setDetailIsOpen((prev) => !prev);
  };

  return isLoading ? (
    <Loading />
  ) : markers?.length > 0 ? (
    <div className="relative h-screen w-screen p-10 overflow-hidden">
      <p className="font-semibold text-4xl text-[#257341] mb-10">
        {category} disponibles en tu zona
      </p>
      <img
        src={cancel}
        alt="cancel"
        className="absolute right-10 top-11 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="pb-4">
        Zona:{" "}
        <select
          name="Zonas"
          id=""
          onChange={filterPublications}
          className="bg-[#EBE3E35E] rounded-md py-1"
        >
          <option value="todas">Todas</option>
          {markers?.map((e, i) => {
            return (
              <option value={e.zone} key={i}>
                {e.zone}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex h-full">
        <div id="map" className="w-1/2 h-[80%] z-0 "></div>
        <div className="w-1/2">
          <ul className={`h-[80%] overflow-y-auto`} ref={parent}>
            {filteredMarkeres?.map((e, i) => {
              return (
                <Card
                  key={i}
                  data={e}
                  focus={focus}
                  openDetails={openDetailsAndClose}
                />
              );
            })}
          </ul>
        </div>
      </div>
      {detailIsOpen && (
        <Details closeDetails={openDetailsAndClose} details={userDetails} />
      )}
    </div>
  ) : (
    <NoPublications />
  );
}

export default Maps;
