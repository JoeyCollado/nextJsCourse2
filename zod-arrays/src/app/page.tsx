import React from 'react'
import {email, z} from 'zod'
const page = () => {
  
const hobbiesSchema = z.array(z.string()); //defining array
const userHobbies = ["reading", "cooking", "coding"]; //assigning value
console.log(hobbiesSchema.parse(userHobbies)); //displaying array


  return (
    <div>
      
    </div>
  )
}

export default page

//how to install 
//npm i zod