"use client";

import Link from "next/link";
import React, { useState } from "react";
import '../globals.css';

const Layout = () => {
  const [name, setName] = useState("");

  return (
    <div className="m-4 ">
   

      <div className="flex gap-5 justify-center">
      <input
        type="text"
        value={name}
        placeholder="Hello"
        onChange={(e) => setName(e.target.value)}
        className="border p-1"
      ></input>
      <br/>
        <Link className="bg-red-400 py-1 px-2 rounded-sm" href="/analytics/revenue">Revenue</Link>
        <Link className="bg-blue-400 py-1 px-2 rounded-sm" href="/analytics/stats">Stats</Link>
      </div>
    </div>
  );
};

export default Layout;
