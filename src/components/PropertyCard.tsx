

import type React from "react"
import type { Property } from "../types/Property"

interface PropertyCardProps {
  property: Property
  onClick: (property: Property) => void
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out cursor-pointer overflow-hidden transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
      onClick={() => onClick(property)}
    >
      <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{property.title}</h3>
        <p className="text-2xl font-bold text-emerald-600 mb-2">{formatPrice(property.price)}</p>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {property.bedrooms} bed{property.bedrooms !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {property.location}
          </span>
        </div>
      </div>
    </div>
  )
}
