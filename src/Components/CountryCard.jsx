import React from 'react'
import usa from '../assets/usa.png'
import japan from '../assets/japan.png'
import uk from '../assets/uk.png'
import korea from '../assets/korea.png'
import dots from '../assets/dots.png'

import CountrySessionProgress from './CountrySessionProgress'

function CountryCard() {
    return (
        <>
            <div className='w-150 bg-[rgb(25,25,25)] p-5 rounded-2xl'>
                <div className='flex items-center justify-between font-medium mb-5'>
                    <h1 className='text-xl'>Session by Country</h1>
                    <img src={dots} alt="" className='w-5 cursor-pointer' />
                </div>
                {/* //Countries */}
                <CountrySessionProgress flag={usa} progress={83} countryName="United States"></CountrySessionProgress>
                <CountrySessionProgress flag={japan} progress={70} countryName="Japan"></CountrySessionProgress>
                <CountrySessionProgress flag={uk} progress={45} countryName="United Kingdom"></CountrySessionProgress>
                <CountrySessionProgress flag={korea} progress={38} countryName="South Korea"></CountrySessionProgress>
                {/* ====== */}
            </div>
        </>
    )
}

export default CountryCard