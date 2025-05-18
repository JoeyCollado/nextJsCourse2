// export async function GET(){ //http method
//     return new Response("Hello World")
// }

import { movies } from "./db";


export async function GET(){ //http method
    return Response.json(movies)
}

 