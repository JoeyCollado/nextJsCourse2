import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Movie app</h1>
      <p>Manage your favorite movies in the best way</p>

      <div>
        <Link href="/add-movies">
          <button>Add Movie</button>
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
