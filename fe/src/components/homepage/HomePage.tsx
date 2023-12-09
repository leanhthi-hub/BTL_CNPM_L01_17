'use client';
import React from 'react';
import Image from 'next/image';

function HomePage() {
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <div>
          <p className='font-semibold text-6xl text-[#293393] mb-8'>
            Dịch vụ in ấn
          </p>
          <p className='text-2xl'>
            Trao quyền cho sinh viên bằng giải pháp in ấn thông minh.
          </p>
        </div>
        <Image src={'/images/home_image.png'}  alt='image' width={600} height={600} />
      </div>
      <div className='bg-[#F7F7F7] '>
        <p className='font-semibold text-3xl text-[#293393] text-center p-8'>
          Lợi ích
        </p>
        <div className='grid grid-cols-3 gap-2'>
            <div className='p-4 bg-white m-8 rounded-[1rem] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <Image src={'/images/icon_1.png'} alt='icon' width={60} height={60}/>
              <p className='text-2xl font-semibold text-[#293393] my-4'>Hiệu quả và tiết kiệm</p>
              <p className='text-xl'>
              Hệ thống cho phép sinh viên tải tài liệu và tùy chỉnh các tùy chọn in ấn, giúp tiết kiệm thời gian và giảm lãng phí giấy in.
              </p>
            </div>
            <div className='p-4 bg-white m-8 rounded-[1rem] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <Image src={'/images/icon_2.png'} alt='icon' width={60} height={60}/>
              <p className='text-2xl font-semibold text-[#293393] my-4'>Quản lí dễ dàng</p>
              <p className='text-xl'>
              HCMUT_SSPS lưu trữ lịch sử in ấn của sinh viên và cho phép quản lý xem thông tin này, đảm bảo tính minh bạch và tuân thủ.
              </p>
            </div>
            <div className='p-4 bg-white m-8 rounded-[1rem] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <Image src={'/images/icon_3.png'} alt='icon' width={60} height={60}/>
              <p className='text-2xl font-semibold text-[#293393] my-4'>Tiết kiệm tài chính</p>
              <p className='text-xl'>Sinh viên có thể mua thêm trang in khi cần thiết, giúp họ quản lý tài chính cá nhân một cách hiệu quả hơn và tránh việc tốn thời gian đi đến cơ sở in ấn ngoại trường.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage