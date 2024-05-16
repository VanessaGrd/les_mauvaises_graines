import React from 'react'
import logo from "../public/logo.png"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex flex-row items-center pt-2 ">
      <Image width={100} height={100} src={logo} alt="logo" className='px-4' />
      <h1>Les mauvaises graines</h1>
    </div>
  );
}

export default Navbar
