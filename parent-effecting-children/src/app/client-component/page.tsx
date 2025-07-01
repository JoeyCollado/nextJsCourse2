"use client";
import React from 'react'
import {add,subtract} from '@/utils/index'

const ServerComp = () => {

    const result = add(1,2)
    console.log(result)
    const result2 = subtract(5,2)
    console.log(result2)

  return (
    <div>
      Client Component
    </div>
  )
}

export default ServerComp
