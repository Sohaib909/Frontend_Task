
import type React from "react"
import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { mockProperties } from "../data/mockProperties"

export const PropertyDetails: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const property = useMemo(() => mockProperties.find((p) => String(p.id) === String(id)), [id])
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Listings
      </button>

      {!property ? (
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-700">Property not found.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Go to Listings
          </button>
        </div>
      ) : (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Price</h3>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(property.price)}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bedrooms</h3>
              <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-2xl font-bold text-gray-900">{property.location}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h3>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                This beautiful property offers {property.bedrooms} bedroom{property.bedrooms !== 1 ? "s" : ""}
                in the desirable {property.location} area. With modern amenities and excellent location, this property
                represents great value at {formatPrice(property.price)}.
              </p>
              <p className="text-gray-600 mt-4">
                Perfect for families or professionals looking for quality accommodation in a prime location. Contact us
                today to schedule a viewing.
              </p>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
