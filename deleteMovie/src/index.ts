import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient() //instance of prisma client

//function to create a movie
async function createMovie(){
   const newMovie = await prisma.movie.create({
     data: {
        title: 'Inception2',
        description: 'A cinematic masterpiece that seamlessly blends reality and dreams, Inception is a captivating story of a dream within a dream',
        genre: "Sci-Fi",
        releaseDate: new Date('2010-07-16'),
        rating: 8.8,

     }
    }) //accessing our prisma and movie schema and performing create query, adding specific data to our database
    console.log(newMovie);
}

async function createMultipleMovies(){
   const movies = await prisma.movie.createMany({
    data: [
        {
            title: "The Dark Knight",
            description: "A superhero movie that follows the story of Batman.",
            genre: "Action",
            rating: 8.8,
            releaseDate: new Date("2008-07-18"),
          },
          {
            title: "Interstellar",
            description:
              "A science fiction movie that explores the possibilities of interstellar travel.",
            rating: 8.6,
            genre: "Sci-Fi",
            releaseDate: new Date("2014-11-07"),
          },
          {
            title: "Alien Covenant",
            description:
              "A science fiction movie that explores the possibilities of interstellar travel.",
            rating: 8.6,
            genre: "Sci-Fi",
            releaseDate: new Date("2014-11-07"),
          },
    ]
   })
   console.log(movies);
}

//function to fetch movies data
async function getAllMovies(){
  const movies = await prisma.movie.findMany(); //allow us to access all movies/data 
  console.log("All Movies: ", movies); // run npm run dev to see all fetched datas
}

//function to get specific movie
async function getMovieById(movieId:number){
  const movie = await prisma.movie.findUnique({
    where: {id: movieId}, //search for specific movie, where id is equal to movie id
  })
  console.log(movie)
}

//function to update a specific movie
async function updateMovie(movieId:number, updateTitle: string, updatedDescription: string, updatedGenre: string){
  const updatedMovie = await prisma.movie.update({
    where: {id: movieId}, //where we find movie
    //how we update movie
    data: {
      title: updateTitle,
      description: updatedDescription,
      genre: updatedGenre
    },
  });

  console.log("Updated Movie: ", updateMovie)
}

async function main(){//function to allow us to run our queries
    // C.R.U.D
    //await createMovie(); //executing createMovie function
    //await createMultipleMovies(); //execute create multi movie function
    //await getAllMovies();
    //await getMovieById(5); // get specific movie by id
    await updateMovie(1, "Updated title", "Updated description", "Updated genre") // update specific movie by id
}

//call function
main().then(async () => await prisma.$disconnect()).catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
})

//npx ts-node .\src\index.ts = running index.ts file