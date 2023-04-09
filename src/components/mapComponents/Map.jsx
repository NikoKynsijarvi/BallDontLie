import { useEffect, useState } from "react";
import Map, { GeolocateControl } from "react-map-gl";
import courtsService from "./../../services/courts";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContainer = () => {
  const [courts, setCourts] = useState([]);
  useEffect(() => {
    courtsService
      .getCourts()
      .then((res) => {
        setCourts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ flex: 1 }}>
      <Map
        mapboxAccessToken=""
        initialViewState={{
          latitude: 60.207623,
          longitude: 24.924595,
          zoom: 10.5,
        }}
        mapStyle="mapbox://styles/niksu98/ckp6mewtr7fni18otmkpslbbs"
      ></Map>
    </div>
  );
};

export default MapContainer;
