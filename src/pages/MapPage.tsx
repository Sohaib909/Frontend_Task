import React from "react"
import type { Property } from "../types/Property"
import { MapView } from "../components/MapView"

interface MapPageProps {
  properties: Property[]
}

export const MapPage: React.FC<MapPageProps> = ({ properties }) => {
  return <MapView properties={properties} />
}
