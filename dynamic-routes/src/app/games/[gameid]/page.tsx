import React from 'react'

const page: React.FC<{ params: { gameid: string } }> = ({ params }) => {
  return (
    <div>
      <h1>Game: {params.gameid}</h1>
    </div>
  )
}

export default page
