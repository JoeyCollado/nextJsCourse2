import { Clock, Home, TrendingUp } from 'lucide-react'
import React from 'react'

const Default = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
    <section>
      <h2 className="text-xl font-bold">MENU</h2>
      <nav className="mt-4">
        <ul>
          <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
            <Home /> Discover
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
            <TrendingUp /> Trending
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
            <Clock /> Recent
          </li>
        </ul>
      </nav>
    </section>

    <section>
      <h2 className="mt-6 text-xl font-bold">Favorites</h2>
      <ul className="mt-2 mb-[2rem]">
        {[1,2,3,4,5].map(i => (  //render multiple items
          <div key={i} className="flex mt-[2rem] gap-4">
            <img src="/id.png" alt="" className="h-15 w-15 bg-gray-700 rounded-md"></img>

            <div>
              <p className="text-white">Random</p>
              <p className="text-sm text-gray-400">Person</p>
            </div>
          </div>
        ))}
      </ul>
    </section>

  </aside>
  )
}

export default Default
