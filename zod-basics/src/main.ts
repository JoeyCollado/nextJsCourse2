//import zod
import {email, z} from 'zod';

//zod schema (Shape)
const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(),
})

//create actual data
const userData = {
    name: "joey",
    age: 22,
    email: "joey123@gmail.com",
}

//ask zod to validate data legitimacy
const validUser = userSchema.parse(userData)
console.log(validUser);