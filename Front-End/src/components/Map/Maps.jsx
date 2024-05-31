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

    // map.on("load", () => {
    // Limit panning to Buenos Aires
    // map.setMaxBounds([
    //   [-58.542, -34.714],
    //   [-58.341, -34.504],
    // ]);
    // });

    let markers = publicaciones[category].map((e) => {
      let marker = new mapboxgl.Marker({ color: "green" })
        .setLngLat([e.longitude, e.latitude])
        // .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popup))
        .addTo(map);

      return {
        ...e,
        marker: marker,
      };
    });

    setMap(map);
    setMarkers(markers);
  }, []);

  const filterPublications = (e) => {
    let zone = e.target.value;

    markers.forEach((e) => {
      zone === "todas" || zone === e.zone
        ? e.marker.addTo(map)
        : e.marker.remove();
    });
  };

  const toggleModalAndClose = useCallback(() => {
    setDetailIsOpen((prev) => !prev);
  }, []);

  const focus = useCallback(
    (id) => {
      let publication = markers.find((e) => e._id === id);
      setUserDetails(publication);
      map.flyTo({
        center: publication.marker.getLngLat(),
        zoom: 14,
        speed: 1.2,
        curve: 1,
        essential: true,
      });
      toggleModalAndClose();
    },
    [markers, map, toggleModalAndClose]
  );

  return (
    <div className="h-screen w-screen p-10 overflow-x-hidden">
      <p className="font-semibold text-4xl text-[#257341] mb-10">
        {category} disponibles en tu zona
      </p>
      <div>
        Zona:{" "}
        <select name="Zonas" id="" onChange={filterPublications}>
          <option value="todas">Todas</option>
          {publicaciones[category].map((e) => {
            return <option value={e.zone}>{e.zone}</option>;
          })}
        </select>
      </div>
      <div className="flex h-full">
        <div ref={mapRef} className="w-1/2 "></div>
        <div className="w-1/2 relative">
          <ul className={`h-full overflow-y-auto ${detailIsOpen && "hidden"}`}>
            {markers?.map((e) => {
              return (
                <li onClick={() => focus(e._id)}>
                  <Card key={e._id} data={e} />
                </li>
              );
            })}
          </ul>
          {detailIsOpen && (
            <Details closeModal={toggleModalAndClose} details={userDetails} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Maps;

let popup = `<h1>Hola mundo</h1> 
             <p>este es un texto de prueba</p>
             <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2023/04/react-must-be-in-scope-when-using-jsx.jpg"/>
             `;
