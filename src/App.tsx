
import { Routes, Route, Navigate } from "react-router-dom"
import { mockProperties } from "./data/mockProperties"
import { PropertyList } from "./components/PropertyList"
import { PropertyDetails } from "./components/PropertyDetails"
import { Footer } from "./components/Footer"

import "./App.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<PropertyList properties={mockProperties} />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
