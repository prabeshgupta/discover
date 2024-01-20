import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between p-5 shadow-sm'>
            <div className='flex gap-3 items-center'>
                <Image src='/logo.png' alt="Logo" width={50} height={50} />
                <h2 className='text-[25px] bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-widest font-semibold'>DISCOVER</h2>
            </div>
            <ul className='flex gap-8 items-center'>
                <li className='text-[18px] cursor-pointer hover:text-indigo-600'>Home</li>
                <li className='text-[18px] cursor-pointer hover:text-purple-500'>About Us</li>
                <li className='text-[18px] cursor-pointer hover:text-pink-500'>Contact Us</li>
            </ul>
        </div >
    )
}

export default Header