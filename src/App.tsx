import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          🚀 Tailwind + React + TypeScript is working!
        </h1>
        <p className="mt-4 text-gray-700">
          If you can see this styled text, your setup is correct.
        </p>
        <button className="mt-6 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
