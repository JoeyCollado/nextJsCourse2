import React from 'react'

type GameProps = {
    params: Promise<{id: string}>
}

export const generateMetadata = async ({params}: GameProps) => {
    const {id} = await params;

    return{
       title: `Game ID ${id}`
    }
}

//ex go to http://localhost:3000/games/4

const page = async ({params}: GameProps) => {

    const {id} = await params;
  return (
    <div>
      Game ID: {id}
    </div>
  )
}

export default page
