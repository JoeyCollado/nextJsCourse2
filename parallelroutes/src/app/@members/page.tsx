import Link from 'next/link'
import React from 'react'

const page = () => {
// simple way of displaying error
  // if(2 < 5 ){
  //   throw new Error("Error")
  // }

  return (
    <div className='border p-[10rem] w-[30rem]'>
      <h1>Members</h1>
      <Link href='/salaries'>Go to salary</Link>
    </div>
  )
}

export default page
