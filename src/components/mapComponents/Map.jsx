import { useEffect, useState } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import CourtInfoContainer from "../CourtInfoContainer";

import courtsService from "./../../services/courts";
import "mapbox-gl/dist/mapbox-gl.css";

const MAP_TOKEN =
  "pk.eyJ1Ijoibmlrc3U5OCIsImEiOiJja3A2bG9ldnkwcnhiMm9xdDg0dzc3OTF3In0.fkw1qJFQegoYo4ILntuyyw";

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
        mapboxAccessToken={MAP_TOKEN}
        initialViewState={{
          latitude: 60.207623,
          longitude: 24.924595,
          zoom: 10.5,
        }}
        mapStyle="mapbox://styles/niksu98/ckp6mewtr7fni18otmkpslbbs"
      >
        {courts.map((court) => (
          <Marker
            latitude={court.location.coordinates[1]}
            longitude={court.location.coordinates[0]}
          />
        ))}
        <CourtInfoContainer />
      </Map>
    </div>
  );
};

export default MapContainer;
