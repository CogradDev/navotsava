import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";

const routes = [
  {
    name: "Route 1",
    color: "#007BFF", // Blue
    lineType: "solid",
    bgColor: "bg-gradient-to-r from-blue-100 to-blue-50",
    places: [
      { name: "Bagpat", coords: [28.9449, 77.2273] },
      { name: "Shamli", coords: [29.4492, 77.3086] },
      { name: "Saharanpur", coords: [29.964, 77.546] },
      { name: "Muzaffarnagar", coords: [29.4737, 77.7045] },
      { name: "Meerut", coords: [28.9845, 77.7064] },
      { name: "Delhi", coords: [28.6139, 77.209] },
    ],
  },
  {
    name: "Route 2",
    color: "#28A745", // Green
    lineType: "dashed",
    bgColor: "bg-gradient-to-r from-green-100 to-green-50",
    places: [
      { name: "Ghaziabad", coords: [28.6692, 77.4538] },
      { name: "Hapur", coords: [28.7306, 77.7804] },
      { name: "Bijnor", coords: [29.3724, 78.1366] },
      { name: "Amroha", coords: [28.903, 78.469] },
      { name: "Moradabad", coords: [28.8389, 78.7733] },
      { name: "Rampur", coords: [28.8159, 79.025] },
      { name: "Bareilly", coords: [28.367, 79.4304] },
      { name: "Pilibhit", coords: [28.64, 79.8032] },
      { name: "Shahjahanpur", coords: [27.8815, 79.9091] },
      { name: "Budaun", coords: [28.03, 79.1] },
      { name: "Bulandshahr", coords: [28.4089, 77.8494] },
      { name: "Delhi", coords: [28.6139, 77.209] },
    ],
  },
  {
    name: "Route 3",
    color: "#6F42C1", // Purple
    lineType: "dotted",
    bgColor: "bg-gradient-to-r from-purple-100 to-purple-50",
    places: [
      { name: "Mathura", coords: [27.4924, 77.6737] },
      { name: "Agra", coords: [27.1767, 78.0081] },
      { name: "Firozabad", coords: [27.1591, 78.395] },
      { name: "Mainpuri", coords: [27.231, 79.0288] },
      { name: "Etah", coords: [27.5607, 78.6659] },
      { name: "Kasganj", coords: [27.8054, 78.6462] },
      { name: "Hathras", coords: [27.5977, 78.0523] },
      { name: "Aligarh", coords: [27.8974, 78.088] },
      { name: "Delhi", coords: [28.6139, 77.209] },
    ],
  },
  {
    name: "Route 4",
    color: "#FFC107", // Yellow
    lineType: "dashdot",
    bgColor: "bg-gradient-to-r from-yellow-100 to-yellow-50",
    places: [
      { name: "Etawah", coords: [26.7779, 79.0214] },
      { name: "Auraiya", coords: [26.4631, 79.5094] },
      { name: "Jalaun", coords: [26.1445, 79.3366] },
      { name: "Hamirpur", coords: [25.9611, 80.1551] },
      { name: "Banda", coords: [25.4753, 80.3358] },
      { name: "Chitrakoot", coords: [25.209, 80.9128] },
      { name: "Mahoba", coords: [25.2927, 79.8707] },
      { name: "Jhansi", coords: [25.4486, 78.5696] },
      { name: "Lalitpur", coords: [24.6902, 78.4195] },
      { name: "Gwalior", coords: [26.2183, 78.1828] },
      { name: "Agra", coords: [27.1767, 78.0081] },
      { name: "Delhi", coords: [28.6139, 77.209] },
    ],
  },
];

const getCustomIcon = (color) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color:${color}; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; transform: scale(1.2); box-shadow: 0 0 12px rgba(0,0,0,0.2);"></div>`,
  });
};

const RoutePlan = () => {
  const indiaCenter = [23.5937, 78.9629];
  const zoomLevel = 6;

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <h1 className="text-4xl lg:text-5xl text-center font-extrabold mb-10 lg:mb-16 text-orange-500 tracking-wide drop-shadow-md">
        Route Plan Across India
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
        {/* Left Panel - Display first two routes */}
        <div className="flex flex-col w-full lg:w-1/4 space-y-8">
          {routes.slice(0, 2).map((route, index) => (
            <div
              key={index}
              className={`relative border border-gray-300 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${route.bgColor} backdrop-filter backdrop-blur-lg hover:bg-opacity-95`}
            >
              {/* Route Badge */}
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FaRoute className="text-lg text-orange-400" />
              </div>

              {/* Header with Icon */}
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 mr-4 rounded-full border-4 border-white shadow-md"
                  style={{ backgroundColor: route.color }}
                ></div>
                <span className="text-2xl font-bold text-gray-800 drop-shadow-sm">
                  {route.name}
                </span>
              </div>

              {/* Places List */}
              <ul className="space-y-3">
                {route.places.map((place, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-800 hover:text-indigo-700 transition-colors duration-300"
                  >
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span className="text-base font-medium">{place.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[900px]">
          <MapContainer
            center={indiaCenter}
            zoom={zoomLevel}
            scrollWheelZoom={false}
            className="h-full w-full rounded-3xl shadow-2xl "
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {routes.map((route, routeIndex) => (
              <React.Fragment key={routeIndex}>
                <Polyline
                  positions={route.places.map((place) => place.coords)}
                  color={route.color}
                  weight={4}
                  opacity={0.8}
                  dashArray={
                    route.lineType === "solid"
                      ? null
                      : route.lineType === "dashed"
                      ? "10,15"
                      : route.lineType === "dotted"
                      ? "3,8"
                      : "15,10,4,10"
                  }
                />
                {route.places.map((place, placeIndex) => (
                  <Marker
                    key={placeIndex}
                    position={place.coords}
                    icon={getCustomIcon(route.color)}
                  >
                    <Popup>
                      <div className="text-lg font-bold text-gray-800">
                        {place.name}
                      </div>
                      <div className="text-sm text-gray-500">{route.name}</div>
                    </Popup>
                  </Marker>
                ))}
              </React.Fragment>
            ))}
          </MapContainer>
        </div>

        {/* Right Panel - Display last two routes */}
        <div className="flex flex-col w-full lg:w-1/4 space-y-8">
          {routes.slice(2).map((route, index) => (
            <div
              key={index}
              className={`relative border border-gray-300 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${route.bgColor} backdrop-filter backdrop-blur-lg hover:bg-opacity-95`}
            >
              {/* Route Badge */}
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FaRoute className="text-lg text-orange-400" />
              </div>

              {/* Header with Icon */}
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 mr-4 rounded-full border-4 border-white shadow-md"
                  style={{ backgroundColor: route.color }}
                ></div>
                <span className="text-2xl font-bold text-gray-800 drop-shadow-sm">
                  {route.name}
                </span>
              </div>

              {/* Places List */}
              <ul className="space-y-3">
                {route.places.map((place, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-800 hover:text-indigo-700 transition-colors duration-300"
                  >
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span className="text-base font-medium">{place.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutePlan;
