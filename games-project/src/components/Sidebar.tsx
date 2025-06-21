import Link from 'next/link'
import React from 'react'
import { FaGamepad } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div>
      <h2>Gaming Dashboard</h2>
      <div>
        <ul>
            <li>
                <FaGamepad className='mr-2'/>Games
            </li>
            <li>
                <FaGamepad className='mr-2'/>Games
            </li>
            <li>
                <FaGamepad className='mr-2'/>Games
            </li>
            <li>
                <FaGamepad className='mr-2'/>Games
            </li>
        </ul>

        <section className='mb-[7rem]'>
            <Link href='/login' className='text-2xl font-bold'>Login</Link>
        </section>
      </div>
    </div>
  )
}

export default Sidebar
