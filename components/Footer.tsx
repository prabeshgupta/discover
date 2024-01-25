"use client"
import React, { useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    return (
        <div className='text-center text-[16px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 mt-5 sticky'>Copyright &copy; {year} <a href="https://prabeshgupta.com.np" className="no-underline">Prabesh Gupta</a>
        </div>
    )
}

export default Footer