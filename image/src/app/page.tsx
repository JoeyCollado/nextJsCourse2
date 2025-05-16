import React from 'react'
import MyImage from '../../public/ss.png';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Image src={MyImage} alt='image' width={500} height={500}></Image>
      <Image
        src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=3916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nature Image"
        width={500}
        height={500}
      /> {/* require some few tweaks of the image to work in the next.config.ts */}
    </div>
  )
}

export default page

//internal images = images inside the public folder for example
//external images = images we copy from the internet like link of an image for example