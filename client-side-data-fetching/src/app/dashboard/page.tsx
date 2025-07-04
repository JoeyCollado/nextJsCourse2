"use client";
import Password from '@/components/Password'
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'
import React from 'react'

const page = () => {
  return (
    <div>
      <Settings/>
      <Profile/>
      <Password/>
    </div>
  )
}

export default page

//the parent component will affect the nested/children component
//in this example the components i imported are in default server component but by making this route a client component all children components imported was the converted to client