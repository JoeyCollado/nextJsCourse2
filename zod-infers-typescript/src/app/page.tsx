import React from 'react'
import {email, z} from 'zod'
const page = () => {
  
const userSchema = z.object({ //defining schema
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
})

//creating different type based on schema
type User = z.infer<typeof userSchema>; //this code means we all want the type from the user schema to be inside User

const validUser: User = { //using the infer type schema User to create a validated data
  name: "joey",
  age: 22,
  email: "joey123@gmail.com"
}

try{
  const parsedUser = userSchema.parse(validUser);
  console.log('Valid User: ',parsedUser);
}catch(error){
  console.log('Error: ', error)
}
  return (
    <div>
      
    </div>
  )
}

export default page

//how to install 
//npm i zod