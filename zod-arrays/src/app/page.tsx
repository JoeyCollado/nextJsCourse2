import React from 'react'
import {email, z} from 'zod'
const page = () => {
  
const roleSchema = z.enum(["admin", "user", "guest"]); //defining array
const userRole = 'admin'
console.log(roleSchema.parse(userRole));

  return (
    <div>
      
    </div>
  )
}

export default page

//how to install 
//npm i zod