import React from 'react'
import {email, z} from 'zod'
const page = () => {
  
//zod schema (Shape)
const userSchema = z.object({ //object
    name: z.string(),
    address: z.object({ //nested object
      city: z.string(),
      zipCode: z.string(),
    }),
})
//data
const user ={
  name: "joey",
  address: {
    city: "Random city",
    zipCode: "123"
  }
}
//display
console.log(userSchema.parse(user));


  return (
    <div>
      
    </div>
  )
}

export default page

//how to install 
//npm i zod