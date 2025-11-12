import React from 'react'

const Reviews = () => {
  return (
    <div className='bg-[#000f30] w-full py-20 flex items-center justify-center'>
        <div className='flex flex-col text-center items-center lg:w-[50%] w-[90%] gap-15'>
            <img src="/vector-smart.png" alt="" className='h-50' />
            <p className='lg:text-[20px] text-[16px] text-white font-semibold'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>
            <div className='flex flex-col items-center'>
                <h3 className='text-[#2f73f2] font-bold text-2xl'>John Doe</h3>
                <p className='text-[#b3b7c1]'>CEO, Company Name</p>
            </div>  
        </div>
    </div>
  )
}

export default Reviews