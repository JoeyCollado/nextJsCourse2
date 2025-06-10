import { Clock, Home, TrendingUp } from "lucide-react";
import React from "react";

const Sidebar = () => {
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
    </aside>
  );
};

export default Sidebar;

//npm i lucide-react
