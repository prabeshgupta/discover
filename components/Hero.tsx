import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='text-center'>
            <div>
                <Image src='/herobg.jpg' alt='hero' width={800} height={200} className='w-full absolute mt-[-10px] opacity-30 pointer-events-none' />
                <div className='mt-[25px]'>
                    <h2 className='text-[55px] bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text tracking-widest font-semibold z-10'>DISCOVER</h2>
                    <h2 className='text-[18px]'>Locate Amazing Places</h2>
                    <div className='mt-[40px] z-20 flex justify-center items-center gap-3'>
                        <input type="text" placeholder='Search your location...'
                            className='z-10 bg-white p-3 border-[1.2px] rounded-full px-4 w-[36%] shadow-sm' />
                        <button className='bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero