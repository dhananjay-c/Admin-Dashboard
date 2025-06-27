import React from 'react'
import dots from '../assets/dots.png'
import drop from '../assets/drop.png'
import Graph from './Graph'

function LineGraph() {
    return (
        <>
            <div className='w-full p-5 bg-[rgb(25,25,25)] rounded-2xl'>
                <div className='flex items-center justify-between font-medium mb-5'>
                    <h1 className='text-xl'>Session by Country</h1>
                    <div className='flex items-center'>
                        <div className='flex mr-5 bg-[rgb(33,34,36)] pt-2 pb-2 pr-4 pl-4 rounded-md cursor-pointer items-center'>
                            <h2>Sales Evalution</h2> <img src={drop} alt="" className='w-4 h-3 ml-3' />
                        </div>
                        <img src={dots} alt="" className='w-5 cursor-pointer' />
                    </div>
                </div>
                <div className='w-full h-[100%]'>
                    <Graph></Graph>
                </div>
            </div>
        </>
    )
}

export default LineGraph