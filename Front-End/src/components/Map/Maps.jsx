import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Card from "../CardOfPublication";
import { publicaciones } from "../../utils/info";
import Details from "./DetallesOfPublication";

function Maps() {
  // AIzaSyDRu5QEijvI4K2Vzl53M-jWz79EtcVwgMY api de google cloud
  // center of Buenos aires { lat: -34.6037, lng: -58.3816 }
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [detailIsOpen, setDetailIsOpen] = useState(false);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
    });

    map.on("load", () => {
      // Limit panning to Buenos Aires
      map.setMaxBounds([
        [-58.542, -34.714],
        [-58.341, -34.504],
      ]);
    });

    let markers = publicaciones.map((e) => {
      let marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat([e.longitude, e.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popup))
        .addTo(map);

      return {
        ...e,
        marker: marker,
      };
    });

    setMap(map);
    setMarkers(markers);
  }, []);

  const filterPublications = (zona) => {
    markers.forEach((e) => {
      if (e.zona != zona) {
        e.marker.remove();
      }
    });
  };

  const allPublications = () => {
    markers.forEach((e) => {
      e.marker.addTo(map);
    });
  };

  const focus = (id) => {
    openDetails();
    markers.forEach((e) => {
      if (e._id == id) {
        map.flyTo({
          center: e.marker.getLngLat(),
          zoom: 14,
          speed: 1.2,
          curve: 1,
          essential: true,
        });
        return;
      }
    });
  };

  const openDetails = () => {
    setDetailIsOpen(!detailIsOpen);
  };

  return (
    <div className="h-screen w-screen p-10 overflow-x-hidden">
      <p className="font-semibold text-4xl text-[#257341] mb-10">
        Gasistas disponibles en tu zona
      </p>
      <div className="flex h-full">
        <div ref={mapRef} className="w-1/2  "></div>
        <div className="w-1/2 relative">
          {/* <button onClick={() => filterPublications("Mataderos")}>
            Filtrar
          </button>
          <button onClick={allPublications}>Todos</button> */}

          <ul className={`h-full overflow-y-auto ${detailIsOpen && "hidden"}`}>
            {publicaciones.map((e) => {
              return (
                <li onClick={() => focus(e._id)}>
                  <Card key={e._id} userData={e.userData} />
                </li>
              );
            })}
          </ul>
          {detailIsOpen && <Details />}
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
