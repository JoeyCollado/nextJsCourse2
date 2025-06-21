import Link from 'next/link'
import React from 'react'
import { FaCog, FaGamepad, FaTrophy, FaUser } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-900 text-white h-screen p-5'>
      <h2 className='text-xl font-bold mb-5'>Gaming Dashboard</h2>
      <div className='flex flex-col justify-between h-screen'>
        <ul>
            <li className='flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer'>
                <FaGamepad className='mr-2'/>Games
            </li>
            <li className='flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer'>
                <FaUser className='mr-2'/>Profile
            </li>
            <li className='flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer'>
                <FaTrophy className='mr-2'/>Achievements
            </li>
            <li className='flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer'>
                <FaCog className='mr-2'/>Settings
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
