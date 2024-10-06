import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

function App() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <MessageCircle className="mr-2" />
          Welcome to React + Express App
        </h1>
        <p className="text-gray-600">Message from server: {message}</p>
      </div>
    </div>
  )
}

export default App