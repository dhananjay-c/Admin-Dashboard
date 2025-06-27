import React from 'react'
import dots from '../assets/dots.png'


function Card(data) {
    return (
        <>
            <div className='bg-[rgb(25,25,25)] w-97.5 rounded-2xl p-5 cursor-pointer  hover:bg-gradient-to-b hover:from-[rgb(146,97,251)] hover:to-[rgb(25,25,25)] transition-all duration-900 mt-5'>
                <div className='flex justify-between '>
                    <div className='bg-[rgb(42,47,56)] rounded-full p-2'><img src={data.img} alt="" className='w-9' /></div>
                    <img src={dots} alt="" className='w-5 h-5 cursor-pointer' />
                </div>

                <h2 className='mt-8 font-medium'>{data.heading}</h2>
                <div className='flex items-center mt-2'><h2 className='text-3xl font-bold'>{data.number}</h2> <h2 className='ml-3 bg-[rgb(87,216,58,0.4)] text-green-100 pr-2 pl-2 rounded-3xl'>{data.growth}</h2></div>
                <h2 className='mt-2 font-thin'>{data.discription}</h2>

            </div>

        </>
    )
}

export default Card