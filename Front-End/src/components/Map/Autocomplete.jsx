// src/components/Autocomplete.js
import React, { useRef, useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import axios from "axios";

let libraries = ["places"];

const AutocompleteComponent = () => {
  const googleKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;

  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const debounce = useRef(null);

  const handlePlaceChanged = () => {
    console.log("hola");
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);
      setLocation({
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <LoadScript googleMapsApiKey={googleKey} libraries={libraries}>
      <Autocomplete
        onLoad={setAutocomplete}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Ej: Miralla 1224"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bgGray w-full p-2 rounded-md outline-none"
        />
      </Autocomplete>
      {location.latitude && location.longitude && "todo bien"}
    </LoadScript>
  );
};

export default AutocompleteComponent;
