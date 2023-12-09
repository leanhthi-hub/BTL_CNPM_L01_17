import React from 'react';
import data from './example.json';

export default function TableFile({ activeStep }: number) {
  return (
    <div className='w-full bg-[#F4F7FD] p-3'>
      <table className='ms-3'>
        <thead className='table'>
          <tr>
            <th className='w-[3rem] px-4 py-2 font-semibold'>No</th>
            <th className='w-[20rem] px-3 py-2 text-start font-semibold'>
              Name
            </th>
            <th className='w-[7rem] px-4 py-2 text-start font-semibold'>
              Loại File
            </th>
            <th className='w-[7rem] px-4 py-2 text-start font-semibold'>
              Size
            </th>
          </tr>
        </thead>
        <tbody className='table rounded-lg bg-white'>
          {activeStep == 1 &&
            data.map((ele, index) => (
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
