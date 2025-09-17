

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
      // Filter by minimum bedrooms
      if (filters.minBedrooms > 0 && property.bedrooms < filters.minBedrooms) {
        return false
      }

      // Filter by search query (case-insensitive)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase()
        return property.title.toLowerCase().includes(query) || property.location.toLowerCase().includes(query)
      }

      return true
    })

    // Sort by price
    if (filters.sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [properties, filters])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Listings</h1>

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
