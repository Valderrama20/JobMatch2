import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Card from "../CardOfPublication";
import { publicaciones } from "../../utils/info";
import Details from "./DetallesOfPublication";
import { useParams } from "react-router-dom";

function Maps() {
  // AIzaSyDRu5QEijvI4K2Vzl53M-jWz79EtcVwgMY api de google cloud
  // center of Buenos aires { lat: -34.6037, lng: -58.3816 }
  let { category } = useParams();
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: { lng: -58.4507, lat: -34.6061 },
      zoom: 10.5,
      style: "mapbox://styles/mapbox/streets-v11",
    });

    let markers = publicaciones[category].map((e) => {
      let marker = new mapboxgl.Marker({ color: "green" })
        .setLngLat([e.longitude, e.latitude])
        .addTo(map);

      return {
        ...e,
        style: "",
        marker: marker,
      };
    });

    setMap(map);
    setMarkers(markers);
    return () => map.remove();
  }, []);

  const filterPublications = (e) => {
    let zone = e.target.value;

    let filter = markers.map((e) => {
      if (zone === "todas" || zone === e.zone) {
        e.style = "";
        e.marker.addTo(map);
      } else {
        e.style = "hidden";
        e.marker.remove();
      }
      return e;
    });
    setMarkers(filter);
  };

  const toggleModalAndClose = useCallback(() => {}, []);

  const focus = useCallback(
    (id) => {
      let publication = markers.find((e) => e._id === id);
      map.flyTo({
        center: publication.marker.getLngLat(),
        zoom: 14,
        speed: 1.2,
        curve: 1,
        essential: true,
      });
    },
    [markers, map, toggleModalAndClose]
  );

  let openDetailsAndClose = (id = null) => {
    if (id) {
      let publication = markers.find((e) => e._id === id);
      setUserDetails(publication);
    }

    setDetailIsOpen((prev) => !prev);
  };

  return (
    <div className="h-screen w-screen p-10 overflow-x-hidden">
      <p className="font-semibold text-4xl text-[#257341] mb-10">
        {category} disponibles en tu zona
      </p>
      <div className="pb-4">
        Zona:{" "}
        <select
          name="Zonas"
          id=""
          onChange={filterPublications}
          className="bg-[#EBE3E35E] rounded-md py-1"
        >
          <option value="todas">Todas</option>
          {publicaciones[category].map((e, i) => {
            return (
              <option value={e.zone} key={i}>
                {e.zone}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex h-full">
        <div ref={mapRef} className="w-1/2 z-0 "></div>
        <div className="w-1/2">
          <ul className={`h-full overflow-y-auto ${detailIsOpen && "hidden"}`}>
            {markers?.map((e) => {
              return (
                <Card
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
  );
}

export default Maps;
