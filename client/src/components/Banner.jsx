import React from 'react'
import BannerCard from '../home/BannerCard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-[#B1B3B3FF] flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 h-full space-y-8'>
                <h2 className='text-4xl font-bold text-yellow-400 leading-snug'>
                    Read or Buy 
                 <span className='text-blue-700'> book you want</span>
                </h2>
                <p className='md:w-4/5 text-2xl'>With easy online browsing and a cozy physical store, finding and purchasing your favorite books has never been easier
                </p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search A Book' 
                    className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-black font-medium hover:bg-black
                    transition-all ease-in duration-300'>Search</button>
                </div>

            </div>

            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner