import React from 'react'

const page = () => {
  return (
    <div>


      
    </div>
  )
}

export default page


// server = component by default, no interactivity
// client = can use hooks like useState, has interactivity

//how to use
//to use server, do nothing
//tp use client, put "use client"; at the top of the file

//when to use
//Server
//great for data fetching
//backend
//private/confidential info
//complex rendering logic
//SEO - friendly dynamic content

//Client
//Interactivity
//State management
//browser API's
//hooks
//client side animation and effects