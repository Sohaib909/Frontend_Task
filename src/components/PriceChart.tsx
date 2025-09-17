import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface PriceChartProps {
  property: {
    title: string
    price: number
  }
}

export const PriceChart: React.FC<PriceChartProps> = ({ property }) => {
  // Generate mock price history data
  const priceHistory = [
    { month: "Jan", price: property.price * 0.85 },
    { month: "Feb", price: property.price * 0.88 },
    { month: "Mar", price: property.price * 0.92 },
    { month: "Apr", price: property.price * 0.95 },
    { month: "May", price: property.price * 0.98 },
    { month: "Jun", price: property.price },
  ]

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Price History</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatPrice} />
            <Tooltip formatter={(value) => [formatPrice(Number(value)), "Price"]} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
