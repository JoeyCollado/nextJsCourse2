import React from 'react'

interface allProps{
    params: {
        all: string[];
    }
}

const page = async ({params}: allProps) => {

    const {all} = await params;
    console.log(all)
  return (
    <div>
      
    </div>
  )
}

//http://localhost:3000/projects/1/2/3/4 //get string of numbers in console page


export default page
