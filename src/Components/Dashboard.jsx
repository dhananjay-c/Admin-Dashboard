import React from 'react'
import search from '../assets/search.png'
import cancel from '../assets/cancel.png'
import pie from '../assets/piechart.png'
import bell from '../assets/notification.png'
import profile from '../assets/profile.jpg'
import drop from '../assets/drop.png'
import calendar from '../assets/calendar.png'
import filter from '../assets/filter.png'
import share from '../assets/share.png'
import Card from './Card'
import CountryCard from './CountryCard'
import money from '../assets/money.png'
import coins from '../assets/coins.png'
import chart from '../assets/chart.png'
import wallet from '../assets/wallet.png'
import LineGraph from './LineGraph'
import TransactionHistory from './TransactionHistory'


function Dashboard() {
    return (
        <>
            <div className='p-3 w-[86vw] pl-5 overflow-y-auto'>


                <div className='flex justify-between'>

                    <h2 className='text-3xl font-medium'>Dashboard</h2>

                    <div className='flex items-center'>
                        <div className='p-2 bg-[rgb(25,25,25)] h-9 rounded flex items-center pl-3'>
                            <img src={search} alt="" className='w-5 h-5 mr-2 cursor-pointer' />
                            <input type="text" name="" id="" placeholder='Type your search Here...' className='text-sm focus:outline-none focus:ring-0 focus:border-transparent' />
                            <img src={cancel} alt="" className='w-5 h-5 ml-8 cursor-pointer' />
                        </div>

                        <div className='bg-[rgb(25,25,25)] p-2 rounded-3xl ml-3 cursor-pointer'>
                            <img src={pie} alt="" className='w-5 h-5 ' />
                        </div>

                        <div className='bg-[rgb(25,25,25)] p-2 rounded-3xl ml-3 cursor-pointer'>
                            <img src={bell} alt="" className='w-5 h-5 ' />
                        </div>

                        <img src={profile} alt="" className='w-9 h-9 rounded-4xl ml-3 cursor-pointer' />

                        <div className='bg-[rgb(25,25,25)] p-2 rounded-3xl ml-3 cursor-pointer'>
                            <img src={drop} alt="" className='w-2 h-2 ' />
                        </div>

                    </div>

                </div>


                <div className='flex mt-8 justify-between'>
                    <div className='flex'>
                        <h1 className='mr-5 pb-3 cursor-pointer border-b-2 border-[rgb(146,97,251)]'>Overview</h1>
                        <h1 className='mr-5 pb-3 cursor-pointer hover:border-b-2 border-[rgb(146,97,251)]'>Notifications</h1>
                        <h1 className='mr-5 pb-3 cursor-pointer hover:border-b-2 border-[rgb(146,97,251)]'>Trade History</h1>
                    </div>
                    <div className='flex'>

                        <div className='bg-[rgb(25,25,25)] w-auto h-8 flex items-center justify-between pr-3 pl-3 rounded-md mr-4 cursor-pointer'>
                            <img src={calendar} alt="" className='w-5 h-5 mr-2' />
                            <h1 className='text-xs'>25 Aug - 15 Dec 2025</h1>
                        </div>

                        <div className='bg-[rgb(25,25,25)] w-auto h-8 flex items-center justify-between pr-3 pl-3 rounded-md mr-4 cursor-pointer'>
                            <img src={filter} alt="" className='w-5 h-5 mr-2' />
                            <h1 className='text-xs'>Filter</h1>
                        </div>

                        <div className='bg-[rgb(146,97,251)] w-auto h-8 flex items-center justify-between pr-3 pl-3 rounded-md cursor-pointer'>
                            <img src={share} alt="" className='w-5 h-5 mr-2' />
                            <h1 className='text-xs'>Share</h1>
                        </div>

                    </div>

                </div>


                <div className='flex justify-between flex-wrap'>
                    <Card img={money} heading="Lorem, ipsum." number="$348,261" growth="+ 18.23 %" discription="Compared to last month"></Card>
                    <Card img={wallet} heading="Profit" number="$15,708.98" growth="+ 4.54 %" discription="Compared to last month"></Card>
                    <Card img={coins} heading="Total Participations" number="7.415.644" growth="+ 3.86 %" discription="Compared to last month"></Card>
                    <Card img={chart} heading="Total Connections" number="10,87 %" growth="+ 35.46 %" discription="Compared to last month"></Card>
                </div>


                <div className='mt-5.5 flex'>
                    <div className='w-262 mr-5 h-90'>
                        <LineGraph></LineGraph>
                    </div>
                    <div className='h-80'>
                        <CountryCard></CountryCard>
                    </div>
                </div>


                <div className='w-full mt-[-20px]'>
                    <TransactionHistory></TransactionHistory>
                </div>


            </div>
        </>
    )
}

export default Dashboard