"use client";

import React from 'react'
import { useState } from 'react'

function ConfigProperties() {
    const [paged, setPaged] = useState('All');
    const [copie, setCopie] = useState(1);
    const [layout, setLayout] = useState('Portrait');
  return (
    <div className='flex flex-col p-8 items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100'>
        <p className='text-3xl font-semibold'>Chỉ định thuộc tính in</p>
        <div className='w-full text-xl mb-4'>
            <p className='mb-2'>Trang</p>
            <select name="paged" id="paged" value={paged} onChange={(e) => {setPaged(e.target.value)}} className='w-full text-lg px-4 p-2 rounded-lg border border-1 bg-gray-50'>
                <option value="All">Tất cả</option>
                <option value="Even">Trang chẵn</option>
                <option value="Odd">Trang lẻ</option>
            </select>
        </div>
        <div className='w-full text-xl mb-4'>
            <p className='mb-2'>Số bản sao</p>
            <input value={copie} onChange={(e) => {if (parseInt(e.target.value) > 0) setCopie(parseInt(e.target.value))}} type='number' name="copy" id="copy" className='w-full text-lg px-4 p-2 rounded-lg border border-1 bg-gray-50' />
        </div>
        <div className='w-full text-xl mb-4'>
            <p className='mb-2'>Cách trình bày</p>
            <select value={layout} onChange={(e) => {setLayout(e.target.value)}} name="layout" id="layout" className='w-full text-lg px-4 p-2 rounded-lg border border-1 bg-gray-50'>
                <option value="Portrait">Trang dọc</option>
                <option value="Landscape">Trang ngang</option>
            </select>
        </div>
        <div className='w-full text-xl mb-4'>
            <p className='mb-2'>Tùy chọn nâng cao</p>
        </div>
    </div>
  )
}

export default ConfigProperties