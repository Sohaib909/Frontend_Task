
import { Routes, Route, Navigate } from "react-router-dom"
import { mockProperties } from "./data/mockProperties"
import { HomePage } from "./pages/HomePage"
import { PropertyDetailsPage } from "./pages/PropertyDetailsPage"
import { MapPage } from "./pages/MapPage"
import { Footer } from "./components/Footer"

import "./App.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage properties={mockProperties} />} />
          <Route path="/properties/:id" element={<PropertyDetailsPage />} />
          <Route path="/map" element={<MapPage properties={mockProperties} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
