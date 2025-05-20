import { movies } from "../db";

export async function GET(_req: Request, {params}: {params : {id: string}}){
    const {id} = await params;

    const movie = movies.find((movie) => movie.id === +id);

    return movie
       ? new Response(JSON.stringify(movie))
       : new Response("Movie not found", {status: 404})
}

//use thunder client, get method, and paste the url with dynamic id http://localhost:3000/movies/3