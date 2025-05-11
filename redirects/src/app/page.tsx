import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {

  redirect('/user');

  return (
    <div>
      Home
    </div>
  )
}

export default page

//redirect automatically redirects us to the assigned route even when we refresh
