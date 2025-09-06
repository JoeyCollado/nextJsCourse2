import React from 'react'
import {email, z} from 'zod'
const page = () => {
  
//zod schema (Shape)
const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(),
})
//error validator
const result = userSchema.safeParse({
  name: 'Joey',
  age: 20, 
  email: "invalid"
})
if(!result.success){
  console.log(result.error.format());
}

  return (
    <div>
      
    </div>
  )
}

export default page

//how to install 
//npm i zod