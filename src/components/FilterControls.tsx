

import type React from "react"
import type { FilterState } from "../types/Property"

interface FilterControlsProps {
    filters: FilterState
    onFiltersChange: (filters: FilterState) => void
}

export const FilterControls: React.FC<FilterControlsProps> = ({ filters, onFiltersChange }) => {
    const handleBedroomsChange = (minBedrooms: number) => {
        onFiltersChange({ ...filters, minBedrooms })
    }

    const handleSortChange = (sortBy: FilterState["sortBy"]) => {
        onFiltersChange({ ...filters, sortBy })
    }

    return (
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md mb-8 relative z-20 ring-1 ring-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Bedrooms</label>
                    <select
                        value={filters.minBedrooms}
                        onChange={(e) => handleBedroomsChange(Number(e.target.value))}
                        className="relative z-30 block w-full pl-2 pr-8 py-2 bg-gray-50/70 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-400"
                    >
                        <option value="0">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>

                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort by Price</label>
                    <select
                        value={filters.sortBy}
                        onChange={(e) => handleSortChange(e.target.value as FilterState["sortBy"])}
                        className="relative z-30 block w-full px-3 py-2 bg-gray-50/70 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-400"
                    >
                        <option value="none">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
