import React from 'react'

const page = async () => {
  await new Promise(resolve => setTimeout(() => {
    resolve('Content Loading...')
  }, 4000))

  return (
    <div>
      Games
    </div>
  )
}

export default page
