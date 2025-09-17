import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import type { Property } from "../types/Property"
import "leaflet/dist/leaflet.css"

interface MapViewProps {
  properties: Property[]
}

// Fix for default markers in react-leaflet
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export const MapView: React.FC<MapViewProps> = ({ properties }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold mb-2">
          <span className="text-gray-900">Property </span>
          <span className="text-emerald-600">Map</span>
        </h1>
        <p className="text-gray-600">Explore properties on the map</p>
      </div>
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[40.7128, -74.0060]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-gray-900">{property.title}</h3>
                <p className="text-emerald-600 font-bold">{formatPrice(property.price)}</p>
                <p className="text-sm text-gray-600">
                  {property.bedrooms} bed{property.bedrooms !== 1 ? "s" : ""} • {property.location}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      </div>
    </div>
  )
}
