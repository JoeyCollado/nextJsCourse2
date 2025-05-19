// export async function GET(){ //http method
//     return new Response("Hello World")
// }

import { movies } from "./db";


export async function GET(){ //http method, getting the movie
    return Response.json(movies)
}

export async function POST(req: Request){ //posting the movie
   let movie = await req.json();
   const newMovie = {...movie};

   movies.push(newMovie);
   return new Response(JSON.stringify(newMovie));
}

 