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

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
    const movieId = +id;
  
    // Check if movie exists
    const movie = movies.find((m) => m.id === movieId);
  
    if (!movie) {
      return new Response(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }
  
    try {
      const updatedMovie = await req.json();
  
      // Find the index of the movie
      const index = movies.findIndex((m) => m.id === movieId);
  
      if (index === -1) {
        return new Response(JSON.stringify({ error: "Movie not found" }), {
          status: 404,
        });
      }
  
      // Update the movie
      movies[index] = { ...movie, ...updatedMovie };
  
      return new Response(JSON.stringify(movies[index]), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
        status: 400,
      });
    }
  }

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
    const movieId = +id;
  
    // Find the movie index
    const index = movies.findIndex((m) => m.id === movieId);
  
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }
  
    // Remove the movie from the collection
    movies.splice(index, 1);
  
    return new Response(
      JSON.stringify({ message: "Movie deleted successfully" }),
      { status: 200 }
    );
  }