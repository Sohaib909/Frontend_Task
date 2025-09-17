import React from "react"
import type { Property } from "../types/Property"
import { PropertyList } from "../components/PropertyList"

interface HomePageProps {
  properties: Property[]
}

export const HomePage: React.FC<HomePageProps> = ({ properties }) => {
  return <PropertyList properties={properties} />
}
