import React from 'react'

const page = () => {

  if(2 < 5 ){
    throw new Error("Error")
  }
  
  return (
    <div className='border p-[10rem] w-[30rem]'>
      Members
    </div>
  )
}

export default page
