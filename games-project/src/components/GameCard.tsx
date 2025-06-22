import React from 'react'

type GameProps = {
  game: {
    id: string;
    name: string;
    img: string
  }
}


const GameCard = ({game}: GameProps) => {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg shadow-md'>
      <img src={game.img} alt={game.name} className='w-full h-32 object-cover rounded-md'/>
      <h3 className='mt-2 text-lg font-semibold'>{game.name}</h3>
    </div>
  )
}

export default GameCard
