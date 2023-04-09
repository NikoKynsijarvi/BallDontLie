import Sidebar from "../components/Sidebar";
import MapContainer from "../components/mapComponents/Map";

const MapPage = () => {
  return (
    <div className="h-screen w-screen  bg-background flex flex-row">
      <Sidebar />
      <MapContainer />
    </div>
  );
};

export default MapPage;
