import React from 'react';
import data from './example.json';

type Props = {}

export default function Toan() {
    return (
        <div className='bg-[#F4F7FD] p-3'>
            <table className='ms-3'>
                <thead className='table'>
                    <tr>
                        <th className='w-[3rem] px-4 py-2 font-semibold'>No</th>
                        <th className='w-[20rem] px-3 py-2 font-semibold text-start'>Name</th>
                        <th className='w-[7rem] px-4 py-2 font-semibold text-start'>Loại File</th>
                        <th className='w-[7rem] px-4 py-2 font-semibold text-start'>Size</th>
                    </tr>
                </thead>
                <tbody className='table bg-white rounded-lg' >
                    {data.map((ele, index) => (
                        <tr key={index}>
                            <td className='w-[3rem] px-4 py-2 font-bold'>{ele.id}</td>
                            <td className='w-[20rem] px-3 py-2'>{ele.name}</td>
                            <td className='w-[7rem] px-4 py-2'>{ele.type}</td>
                            <td className='w-[7rem] px-4 py-2'>{ele.size} KB</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
