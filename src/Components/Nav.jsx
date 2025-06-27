import React from 'react'
import logo from '../assets/logo.png'
import mini from '../assets/minimizeWindow.png'
import dashboard from '../assets/dashboard.png'
import sales from '../assets/sales.png'
import enrich from '../assets/box.png'
import pie from '../assets/piechart.png'
import drop from '../assets/drop.png'
import shipment from '../assets/truck.png'
import integration from '../assets/connect.png'
import im from '../assets/img.png'
import theme from '../assets/theme.png'
import { useState } from 'react'


function Nav() {

    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenE, setIsOpenE] = useState(false);
    const [enabled, setEnabled] = useState(true);

    return (
        <>
            <div className='bg-[rgb(25,25,25)] w-60 h-[97vh] rounded-xl p-3'>
                <div className='h-50'>
                    <div className='flex items-center justify-between mb-20'>
                        <img src={logo} alt="" className='w-23 cursor-pointer' />
                        <img src={mini} alt="" className='w-5 h-5 cursor-pointer' />
                    </div>


                    <div className='flex items-center bg-[rgb(146,97,251)] p-1.5 rounded-sm cursor-pointer'>
                        <img src={dashboard} alt="" className='w-5 h-5 mr-2' /> <p className='text-sm font-medium'>Dashboard</p>
                    </div>




                    <div className='flex items-center  p-1.5 rounded-sm cursor-pointer mt-5 hover:bg-[rgb(146,97,251)] transition duration-200'>
                        <img src={sales} alt="" className='w-5 h-5 mr-2' /> <p className='text-sm font-medium'>Sales</p>
                    </div>



                    <div className='flex items-center p-1.5 rounded-sm cursor-pointer mt-5 justify-between hover:bg-[rgb(146,97,251)] transition duration-200' onClick={() => setIsOpenA(!isOpenA)}>
                        <span className='flex'><img src={pie} alt="" className='w-5 h-5 mr-2' /> <p className='text-sm font-medium'>Analysis</p></span> <img src={drop} alt="" className='w-3 h-2.5 mr-2' />


                    </div>
                    {isOpenA && (
                        <div className="w-40 trounded-sm cursor-pointer justify-between transition duration-300 mt-5">
                            <ul className="pl-5">
                                <li className="text-sm font-medium cursor-pointe mt-2 hover:bg-[rgb(146,97,251)] transition duration-200 p-1.5 rounded-sm w-40">Product</li>
                                <li className="text-sm font-medium cursor-pointer mt-2 hover:bg-[rgb(146,97,251)] transition duration-200 p-1.5 rounded-sm w-40">Store</li>
                                <li className="text-sm font-medium cursor-pointer mt-2 hover:bg-[rgb(146,97,251)] transition duration-200 p-1.5 rounded-sm w-40">Visitor</li>
                            </ul>
                        </div>
                    )}



                    <div className='flex items-center p-1.5 rounded-sm cursor-pointer mt-5 justify-between hover:bg-[rgb(146,97,251)] transition duration-200' onClick={() => setIsOpenE(!isOpenE)}>
                        <span className='flex'><img src={enrich} alt="" className='w-5 h-5 mr-2' /> <p className='text-sm font-medium'>Enrich</p></span> <img src={drop} alt="" className='w-3 h-2.5 mr-2' />


                    </div>
                    {isOpenE && (
                        <div className="w-40 trounded-sm cursor-pointer justify-between transition duration-300 mt-5">
                            <ul className="pl-5">
                                <li className="text-sm font-medium cursor-pointe mt-2 hover:bg-[rgb(146,97,251)] transition duration-200 p-1.5 rounded-sm w-40">Product</li>
                                <li className="text-sm font-medium cursor-pointer mt-2 hover:bg-[rgb(146,97,251)] transition duration-200 p-1.5 rounded-sm w-40">Store</li>
                                <li className="text-sm font-medium cursor-pointer mt-2 hover:bg-[rgb(146,97,251)] transition duration-200 p-1.5 rounded-sm w-40">Visitor</li>
                            </ul>
                        </div>
                    )}



                    <div className='flex items-center  p-1.5 rounded-sm cursor-pointer mt-5 hover:bg-[rgb(146,97,251)] transition duration-200'>
                        <img src={shipment} alt="" className='w-5 h-5 mr-2' /> <p className='text-sm font-medium'>Shipment</p>
                    </div>


                    <div className='flex items-center  p-1.5 rounded-sm cursor-pointer mt-5 hover:bg-[rgb(146,97,251)] transition duration-200'>
                        <img src={integration} alt="" className='w-5 h-5 mr-2' /> <p className='text-sm font-medium'>Integration</p>
                    </div>





                </div>


                <div className='border-1 border-neutral-500 h-auto p-3 rounded-md mt-120'>
                    <img src={im} alt="" className='rounded-xl w-15' />
                    <p className='text-xs mt-2'>Lorem ipsum do amet consectetur elit. soluta libero voluptate.</p>
                    <button className='bg-neutral-200 text-neutral-900 pl-2 pr-2 pt-1 pb-1 mt-3 rounded text-sm font-medium'>Lorem ipsum</button>
                </div>

                <div className='flex items-center mt-5 justify-between'>
                    <div className='flex  items-center'><img src={theme} alt="" className='w-4 h-4 mr-2' /> <p className='text-sm font-medium'>Dark Mode</p></div>


                    <button
                        onClick={() => setEnabled(!enabled)}
                        aria-pressed={enabled}
                        className={`flex items-center w-8 h-4 rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${enabled ? "bg-[rgb(146,97,251)]" : "bg-gray-300"}`}>
                        <div className={`bg-white w-3 h-3 rounded-full shadow-md transition-transform duration-300 ${enabled ? "translate-x-4" : "translate-x-0"}`} />
                    </button>


                </div>
            </div>
        </>
    )
}

export default Nav