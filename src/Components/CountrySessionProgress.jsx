import React from 'react'

function CountrySessionProgress(data) {
    return (
        <>
            <div className='mt-4 flex items-center'>
                <div className='bg-[rgb(51,51,51)] w-12 p-2 rounded-full'>
                    <img src={data.flag} alt="" className='w-12' />
                </div>

                <div className='w-full ml-3'>
                    <div className='flex items-center justify-between'><h2 className='text-xs'>{data.countryName}</h2> <h2 className='text-xs font-medium'>{data.progress}%</h2></div>

                    <div className="w-full bg-[rgb(47,47,47)] rounded-full h-2.5 overflow-hidden mt-1.5">
                        <div className="bg-[rgb(146,97,251)] h-full transition-all duration-300 rounded-full" style={{ width: `${data.progress}%` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountrySessionProgress