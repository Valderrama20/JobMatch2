// src/components/Autocomplete.js
import React, { useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

let libraries = ["places"];

const AutocompleteComponent = ({ setForm }) => {
  const googleKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;

  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceChanged = () => {
    console.log("hola");
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);
      setForm((prev) => ({
        ...prev,
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      }));
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
          required
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default AutocompleteComponent;
