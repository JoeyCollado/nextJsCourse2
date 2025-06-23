import React, { ReactNode } from 'react'

const EcommerceLAyout = ({children , product}: {children: ReactNode, product:ReactNode}) => { //destructing and annotataing
  return (
    <div>
      {children}
      {product}
    </div>
  )
}

export default EcommerceLAyout
