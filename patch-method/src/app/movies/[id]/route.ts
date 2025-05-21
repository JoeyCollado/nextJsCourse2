import { movies } from "../db";

export async function GET(_req: Request, {params}: {params : {id: string}}){
    const {id} = await params;

    const movie = movies.find((movie) => movie.id === +id);

    return movie
       ? new Response(JSON.stringify(movie))
       : new Response("Movie not found", {status: 404})
}

//use thunder client, get method, and paste the url with dynamic id http://localhost:3000/movies/3

//patch request
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
  