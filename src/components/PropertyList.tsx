

import type React from "react"
import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import type { Property, FilterState } from "../types/Property"
import { PropertyCard } from "./PropertyCard"
import { FilterControls } from "./FilterControls"
import { SearchBar } from "../components/SearchBar"
import { EmptyState } from "./EmptyState"

interface PropertyListProps {
  properties: Property[]
  onPropertyClick?: (property: Property) => void
}

export const PropertyList: React.FC<PropertyListProps> = ({ properties, onPropertyClick }) => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<FilterState>({
    minBedrooms: 0,
    sortBy: "none",
    searchQuery: "",
  })

  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties.filter((property) => {
      // Ensure minBedrooms is a proper number
      const minBedrooms = Number(filters.minBedrooms) || 0
      const matchesBedrooms = minBedrooms === 0 || property.bedrooms >= minBedrooms

      const query = filters.searchQuery.trim().toLowerCase()
      const matchesSearch =
        query.length === 0 ||
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query)

      return matchesBedrooms && matchesSearch
    })

    // Sort by price
    if (filters.sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [properties, filters])

  const bannerImage = properties[0]?.image

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {bannerImage && (
        <div className="mb-10 rounded-xl overflow-hidden shadow relative">
          <div className="relative h-48 sm:h-60 md:h-72 lg:h-80">
            <img
              src={bannerImage}
              alt="Featured"
              className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-110"
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute inset-x-6 sm:inset-x-8 bottom-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white animate-fade-pulse">
                Real Esitate Management
              </h2>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">
            <span className="text-gray-900">Real Estate </span>
            <span className="text-emerald-600">Listings</span>
          </h1>
          <a
            href="/map"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View Map
          </a>
        </div>

        <div className="mb-4">
          <SearchBar
            searchQuery={filters.searchQuery}
            onSearchChange={(query) => setFilters({ ...filters, searchQuery: query })}
          />
        </div>

        <FilterControls filters={filters} onFiltersChange={setFilters} />
      </div>

      {filteredAndSortedProperties.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={(p) => (onPropertyClick ? onPropertyClick(p) : navigate(`/properties/${p.id}`))}
            />
          ))}
        </div>
      )}
    </div>
  )
}
