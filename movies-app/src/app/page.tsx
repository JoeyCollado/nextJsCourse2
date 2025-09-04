import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center
    justify-center w-10/12 mx-auto p-10  text-gray-700">
      <h1 className="text-6xl font-extrabold text-center drop-shadow-lg">Movie app</h1>
      <p className="mt-4 text-lg text-gray-300">Manage your favorite movies in the best way</p>

      <div className="mt-8 flex space-x-4">
        <Link href="/add-movie">
          <button  className="px-6 py-3 bg-blue-600 hover:bg-blue-700
           transition duration-300 ease-in-out text-white rounded-lg
            shadow-md transform hover:scale-105">Add Movie</button>
        </Link>

        <Link href="/all-movies">
          <button className="px-6 py-3 bg-gray-600 hover:bg-gray-700 
          transition duration-300 ease-in-out text-white rounded-lg
           shadow-md transform hover:scale-105">View all movies</button>
        </Link>
      </div>
    </div>
  );
};

export default page;

//prisma setup
//npm i prisma -D
//npx prisma init --datasource-provider sqlite
//npx prisma migrate dev --name init
//npx prisma studio

//shadcn components used
//npx shadcn@latest add button
//npx shadcn@latest add card
//npx shadcn@latest add dialog
//npx shadcn@latest add input
//npx shadcn@latest add label

//npx prisma generate
