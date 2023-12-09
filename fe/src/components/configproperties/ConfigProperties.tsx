'use client';

import React from 'react';
import { useState } from 'react';

function ConfigProperties() {
  const [paged, setPaged] = useState('All');
  const [copie, setCopie] = useState(1);
  const [layout, setLayout] = useState('Portrait');
  return (
    <div className='flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 hover:bg-gray-100'>
      <p className='text-3xl font-semibold'>Chỉ định thuộc tính in</p>
      <div className='mb-4 w-full text-xl'>
        <p className='mb-2'>Trang</p>
        <select
          name='paged'
          id='paged'
          value={paged}
          onChange={(e) => {
            setPaged(e.target.value);
          }}
          className='border-1 w-full rounded-lg border bg-gray-50 p-2 px-4 text-lg'
        >
          <option value='All'>Tất cả</option>
          <option value='Even'>Trang chẵn</option>
          <option value='Odd'>Trang lẻ</option>
        </select>
      </div>
      <div className='mb-4 w-full text-xl'>
        <p className='mb-2'>Số bản sao</p>
        <input
          value={copie}
          onChange={(e) => {
            if (parseInt(e.target.value) > 0)
              setCopie(parseInt(e.target.value));
          }}
          type='number'
          name='copy'
          id='copy'
          className='border-1 w-full rounded-lg border bg-gray-50 p-2 px-4 text-lg'
        />
      </div>
      <div className='mb-4 w-full text-xl'>
        <p className='mb-2'>Cách trình bày</p>
        <select
          value={layout}
          onChange={(e) => {
            setLayout(e.target.value);
          }}
          name='layout'
          id='layout'
          className='border-1 w-full rounded-lg border bg-gray-50 p-2 px-4 text-lg'
        >
          <option value='Portrait'>Trang dọc</option>
          <option value='Landscape'>Trang ngang</option>
        </select>
      </div>
      <div className='mb-4 w-full text-xl'>
        <p className='mb-2'>Tùy chọn nâng cao</p>
      </div>
    </div>
  );
}

export default ConfigProperties;
