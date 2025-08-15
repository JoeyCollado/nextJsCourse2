import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient() //instance of prisma client

//function to create a movie
async function createMovie(){
   const newMovie = await prisma.movie.create({
     data: {
        title: 'Inception',
        description: 'A cinematic masterpiece that seamlessly blends reality and dreams, Inception is a captivating story of a dream within a dream',
        genre: "Sci-Fi",
        releaseDate: new Date('2010-07-16'),
        rating: 8.8,

     }
    }) //accessing our prisma and movie schema and performing create query
    console.log(newMovie);
}

async function main(){//function to allow us to run our queries
    // C.R.U.D
    await createMovie(); //executing createMovie function
}

//call function
main().then(async () => await prisma.$disconnect()).catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
})

//npx ts-node .\src\index.ts = running index.ts file