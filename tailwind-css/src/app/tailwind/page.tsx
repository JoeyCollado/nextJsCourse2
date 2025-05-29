import React from 'react'

const page = () => {
  return (
    <div>
      <section>
        <div className='bg-teal-700 flex justify-between p-4 m-4 '>
            <h1 className='font-bold'>Hello nextjs</h1>
            <ul className='flex space-x-5 '>
                <li className='cursor-pointer hover:scale-105'>Home</li>
                <li className='cursor-pointer hover:scale-105'>About</li>
                <li className='cursor-pointer hover:scale-105'>Contact</li>
            </ul>
        </div>

        <h1 className='text-center font-bold text-2xl mt-10'>Sample Talwind Styling</h1>
        <p className='container m-4 font-light text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum distinctio delectus quod! Id quibusdam perspiciatis assumenda obcaecati alias illo porro ex reiciendis debitis iusto, voluptatem iste eius saepe eaque omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum corrupti dolor aliquid necessitatibus labore architecto enim suscipit optio tempore molestiae repellendus assumenda aperiam, eius voluptate commodi consequatur, veritatis sint nisi.</p>
      </section>
    </div>
  )
}

export default page
