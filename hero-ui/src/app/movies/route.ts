// export async function GET(){ //http method
//     return new Response("Hello World")
// }
import { NextRequest } from "next/server";
import { movies } from "./db";


// export async function GET(){ //http method, getting the movie
//     return Response.json(movies)
// }

export async function POST(req: Request){ //posting the movie
   let movie = await req.json();
   const newMovie = {...movie};

   movies.push(newMovie);
   return new Response(JSON.stringify(newMovie));
}

//filtering for specific movie
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams; //create a search params
    const query = searchParams.get("query");
  //filter for specific movie
    const filteredMovies = query
      ? movies.filter((m) => m.name.toLowerCase().includes(query)) //show specific movie if its searchable if not show all movies list
      : movies;
  
    return new Response(JSON.stringify(filteredMovies));
  }
  //to use go to thunder client or postman, create a request paste this url for example http://localhost:3000/movies/?query=john then use the get method and send
 