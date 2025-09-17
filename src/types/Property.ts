export interface Property {
    id: number
    title: string
    price: number
    bedrooms: number
    location: string
    image: string
  }
  
  export interface FilterState {
    minBedrooms: number
    sortBy: "price-asc" | "price-desc" | "none"
    searchQuery: string
  }
  