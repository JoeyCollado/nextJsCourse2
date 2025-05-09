import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-4xl text-center mt-[10%]'>
      Home

      <div className='flex gap-10 justify-center mt-[10%]'>
        <Link href="/games/revenue" className='hover:scale-105'>Revenue</Link>
        <Link href="/games/stats" className='hover:scale-105'>Stats</Link>
      </div>
    </div>
  )
}

export default page


//not-found.tsx = custom 404 page (route that doesnt exist) 
