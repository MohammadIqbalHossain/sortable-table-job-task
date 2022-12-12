import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

function Table() {

    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setData(data))
        console.log(data);
    }, [])

    



    return (
        <div>
            <div className="overflow-x-auto">
                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">ID.</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left" >Firstname</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Lastname</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">IP_Address</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Almort code</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Time</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Mobile</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Area</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Show</th>
                                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Edit</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                        {
                            data?.map((item, index)=>  <tr key={item._id} className="bg-white">
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <span
                                    className="font-bold text-blue-500 hover:underline">
                                    {index + 1}
                                </span>
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {item.firstName}
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {item.lastName}
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {item.email}
                            </td>
                            <td
                                className="p-3 text-sm capitalize text-gray-700 whitespace-nowrap">
                                {item.gender}
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {item.IpAdress}
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {item.almordCode}
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                    {item.time.slice(0, 15)}
                                </span>
                            </td>
                            <td
                                className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {item.mobile}
                            </td>
                            

                            <td
                                className="p-3 text-sm text-gray-700">
                                <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                                  {item.area}
                                </button>
                            </td>
                            <td
                                className="p-3 text-lg text-gray-700 whitespace-nowrap">
                               
                             {
                               item.show ? <span className='bg-green-200 rounded-lg py-2 px-3'>{item.show.toString().toUpperCase()}
                               </span> : <span className='bg-red-400 rounded-lg py-2 px-3'>{item.show.toString().toUpperCase()}</span>
                             }
                                
                            </td>
                            <td
                                className="p-3 text-lg text-gray-700 whitespace-nowrap capitalize">
                                {item.edit.toString()}
                            </td>
                           
                        </tr>)
                        }

                        </tbody>
                    </table>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <span className="text-blue-500 font-bold hover:underline">1</span>
                            </div>
                            <div className="text-gray-500"> 28, July 2022</div>
                            <div>
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">  12.30 PM</span>
                            </div>

                        </div >
                        <div className="text-sm text-gray-700" >
                            Iqbal Hossain
                        </div >
                        <div className="text-sm font-medium text-black" >
                            <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                                Details
                            </button>
                        </div >
                    </div >
                </div >

            </div>
            <div className="text-sm text-gray-700">
                Iqbal Hossain
            </div>
            <div className="text-sm font-medium text-black">
                <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-600 rounded-lg bg-opacity-40 shadow-lg">
                    Details
                </button>
            </div> */}
        </div>
        </div>
    );
};


export default Table