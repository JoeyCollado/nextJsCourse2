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
    <div>
      <img src={game.img} alt={game.name}/>
    </div>
  )
}

export default GameCard
