import React from 'react'

const page = () => {

    if(2 < 5){
        throw new Error('Error in Dashboard')
    }
  return (
    <div>
      Games
    </div>
  )
}

export default page
