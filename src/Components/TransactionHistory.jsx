import React from 'react'
import download from '../assets/download.png'
import refresh from '../assets/refresh.png'
import dots from '../assets/dots.png'
import Table from '../Components/Table'


const customers = [
    {
        productName: "Apex Pro Subscription",
        orderValue: "4,999.00",
        orderDate: "Jun 01, 2025",
        status: "Completed",
        orderedBy: {
            name: "Emily Johnson",
            email: "emily.johnson@example.com",
            profile: "https://example.com/emilyjohnson"
        }
    },
    {
        productName: "Cloud Insights Module",
        orderValue: "8,999.50",
        orderDate: "Jun 05, 2025",
        status: "Pending",
        orderedBy: {
            name: "Michael Davis",
            email: "michael.davis@example.com",
            profile: "https://example.com/michaeldavis"
        }
    },
    {
        productName: "Team Analytics Pack",
        orderValue: "12,999.99",
        orderDate: "Jun 10, 2025",
        status: "Completed",
        orderedBy: {
            name: "Olivia Brown",
            email: "olivia.brown@example.com",
            profile: "https://example.com/oliviabrown"
        }
    },
    {
        productName: "Revenue Tracker",
        orderValue: "7,499.75",
        orderDate: "Jun 12, 2025",
        status: "Pending",
        orderedBy: {
            name: "James Wilson",
            email: "james.wilson@example.com",
            profile: "https://example.com/jameswilson"
        }
    },
    {
        productName: "Forecast AI Add-on",
        orderValue: "2,999.00",
        orderDate: "Jun 14, 2025",
        status: "Completed",
        orderedBy: {
            name: "Sophia Martinez",
            email: "sophia.martinez@example.com",
            profile: "https://example.com/sophiamartinez"
        }
    },
    {
        productName: "Sales Optimization Tool",
        orderValue: "5,999.99",
        orderDate: "Jun 16, 2025",
        status: "Pending",
        orderedBy: {
            name: "William Anderson",
            email: "william.anderson@example.com",
            profile: "https://example.com/williamanderson"
        }
    },
    {
        productName: "Custom Dashboard Build",
        orderValue: "15,999.00",
        orderDate: "Jun 20, 2025",
        status: "Completed",
        orderedBy: {
            name: "Ava Thomas",
            email: "ava.thomas@example.com",
            profile: "https://example.com/avathomas"
        }
    },
    {
        productName: "Performance Booster Plan",
        orderValue: "3,999.25",
        orderDate: "Jun 25, 2025",
        status: "Pending",
        orderedBy: {
            name: "Benjamin Harris",
            email: "benjamin.harris@example.com",
            profile: "https://example.com/benjaminharris"
        }
    }
];




function TransactionHistory() {
    return (
        <>
            <div className='bg-[rgb(25,25,25)] rounded-2xl p-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-medium'>Transaction History</h2>
                    <div className='flex items-center'>
                        <div className='flex mr-5 bg-[rgb(33,34,36)] pt-1.5 pb-1.5 pr-4 pl-4 rounded-md cursor-pointer items-center hover:bg-[rgb(146,97,251)] transition duration-200'>
                            <img src={download} alt="" className='w-4 h-4 mr-2' /><h2>Download</h2>
                        </div>
                        <div className='flex mr-5 bg-[rgb(33,34,36)] pt-1.5 pb-1.5 pr-4 pl-4 rounded-md cursor-pointer items-center hover:bg-[rgb(146,97,251)] transition duration-200'>
                            <img src={refresh} alt="" className='w-5 h-5 mr-2' /><h2>Refresh</h2>
                        </div>
                        <img src={dots} alt="" className='w-5 h-5 cursor-pointer' />
                    </div>
                </div>

                <div>
                    <Table data={customers} />
                </div>
            </div>
        </>
    )
}

export default TransactionHistory