import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient() //instance of prisma client

async function main(){//function to allow us to run our queries
    // C.R.U.D
}

//call function
main().then(async () => await prisma.$disconnect()).catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
})