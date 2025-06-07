import React from 'react'

const page = async () => {

  await new  Promise(resolve => setTimeout(() => {
    resolve("Content is currently Loading")
  }, 4000))
  
  return (
    <div className='border p-[10rem] w-[30rem]'>
      Comments
    </div>
  )
}

export default page
