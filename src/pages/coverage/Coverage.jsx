import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const warehouses = useLoaderData();
  console.log(warehouses);
  const position = [23.8041, 90.4152];
  return (
    <section className="max-w-7xl mx-auto px-5">
      <div>Heading</div>
      {/* map container */}
      <div className="h-[400px] border">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-[400px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warehouses.map((house, index) => (
            <Marker key={index} position={[house.latitude, house.longitude]}>
              <Popup>
                {house.city}<br /> services: { house.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
