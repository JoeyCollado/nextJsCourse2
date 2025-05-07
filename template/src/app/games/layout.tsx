"use client";

import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [name, setName] = useState("");

  return (
    <div className="">
      <input
        type="text"
        value={name}
        className="flex justify-center bg-gray-400 py-1 rounded-sm p-1 "
        onChange={(e) => setName(e.target.value)}
        placeholder="hello"
      />
      <div className="flex gap-5 justify-center">
        <Link className="bg-red-400 py-1 px-2 rounded-sm" href="/games/revenue">Revenue</Link>
        <Link className="bg-blue-400 py-1 px-2 rounded-sm" href="/games/stats">Stats</Link>
      </div>
    </div>
  );
};

export default Layout;
