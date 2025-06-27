import React from 'react'
import user from '../assets/user.png'
import drop from '../assets/drop.png'


function Table(data) {

    const customers = data.data

    console.log(typeof (customers));
    console.log(customers[0]);


    return (
        <>
            <table className='w-full text-left mt-5 rounded-2xl'>
                <thead className='bg-[rgb(34,34,34)]'>
                    <tr className='w-full p-5'>
                        <th className='pr-5 pl-5 pb-2 pt-2 rounded-l-md font-medium'>Product Name</th>
                        <th className='pr-5 pl-5 pb-2 pt-2 font-medium'>Order Value</th>
                        <th className='pr-5 pl-5 pb-2 pt-2 font-medium'>Order Date</th>
                        <th className='pr-5 pl-5 pb-2 pt-2 font-medium'>Status</th>
                        <th className='pr-5 pl-5 pb-2 pt-2 rounded-r-md font-medium'>Ordered by</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        customers.map((item) => {
                            return (
                                <>
                                    <tr className='w-full'>
                                        <td className='pr-5 pl-5 pb-2 pt-2'>{item.productName}</td>
                                        <td className='pr-5 pl-5 pb-2 pt-2'>${item.orderValue}</td>
                                        <td className='pr-5 pl-5 pb-2 pt-2'>{item.orderDate}</td>

                                        {
                                            item.status == "Completed" ? <td className='pr-5 pl-5 pb-2 pt-2'><h2 className='bg-[rgba(12,255,12,0.24)] w-30 pl-4  text-green-300 rounded-full'> <span>•</span> {item.status}</h2></td> : <td className='pr-5 pl-5 pb-2 pt-2'><h2 className='bg-[rgba(255,12,12,0.24)] w-30 pl-4  text-red-300 rounded-full'> <span>•</span> {item.status}</h2></td>
                                        }


                                        <td className='pr-5 pl-5 pb-2 pt-2 w-100'>
                                            <div className='flex items-center justify-between'>

                                                <div className='flex items-center'>
                                                    <div><img src={user} alt="" className='w-9 mr-2' /></div>

                                                    <div>
                                                        <h2 className='cursor-pointer'>{item.orderedBy.name}</h2>
                                                        <h2 className='text-xs cursor-pointer'>{item.orderedBy.email}</h2>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex mr-5 bg-[rgb(33,34,36)] pt-1.5 pb-1.5 pr-4 pl-4 rounded-md cursor-pointer items-center hover:bg-[rgb(146,97,251)] transition duration-200'>
                                                        <img src={drop} alt="" className='w-3 h-2 mr-2' /><h2>More</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Table