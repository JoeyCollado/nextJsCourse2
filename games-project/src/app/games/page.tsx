import Sidebar from '@/components/Sidebar'
import React from 'react'

const Games = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar/>
      <div className="flex-1 bg-gray-100 p-5">
        <h1 className="text-2xl font-bold mb-4">Featured Games</h1>
        <div className="flex gap-4">
            {/* game card */}
        </div>
      </div>
    </div>
  )
}

export default Games
