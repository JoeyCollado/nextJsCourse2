import React from 'react'

const Sidebar = () => {
  return (
  <aside className='w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen'>
      <section>
        <h2 className='text-xl font-bold'>MENU</h2>
        <nav className='mt-4'>
            <ul>
                <li>Home</li>
            </ul>
        </nav>
      </section>
  </aside>
  )
}

export default Sidebar

//npm i lucide-react    
