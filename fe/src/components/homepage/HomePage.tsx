'use client';
import Image from 'next/image';
import React from 'react';

import styles from '@/style';

function HomePage() {
  return (
    <div className={` ${styles.flexCenter}`}>
      <div className={`flex flex-col ${styles.boxWidth}`}>
        <div className='justify-betwwen flex flex-row gap-16 px-8'>
          <div className='pt-10'>
            <p className='mb-8 text-6xl font-semibold text-[#293393]'>
              Dịch vụ in ấn
            </p>
            <p className='text-2xl'>
              Trao quyền cho sinh viên bằng giải pháp in ấn thông minh.
            </p>
          </div>
          <Image
            src={'/images/home_image.png'}
            alt='image'
            width={600}
            height={600}
          />
        </div>
        <div className='bg-[#F7F7F7] '>
          <p className='p-8 text-center text-3xl font-semibold text-[#293393]'>
            Lợi ích
          </p>
          <div className='grid grid-cols-3 gap-2'>
            <div className='m-8 rounded-[1rem] bg-white p-4 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Image
                src={'/images/icon_1.png'}
                alt='icon'
                width={60}
                height={60}
              />
              <p className='my-4 text-2xl font-semibold text-[#293393]'>
                Hiệu quả và tiết kiệm
              </p>
              <p className='text-xl'>
                Hệ thống cho phép sinh viên tải tài liệu và tùy chỉnh các tùy
                chọn in ấn, giúp tiết kiệm thời gian và giảm lãng phí giấy in.
              </p>
            </div>
            <div className='m-8 rounded-[1rem] bg-white p-4 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Image
                src={'/images/icon_2.png'}
                alt='icon'
                width={60}
                height={60}
              />
              <p className='my-4 text-2xl font-semibold text-[#293393]'>
                Quản lí dễ dàng
              </p>
              <p className='text-xl'>
                HCMUT_SSPS lưu trữ lịch sử in ấn của sinh viên và cho phép quản
                lý xem thông tin này, đảm bảo tính minh bạch và tuân thủ.
              </p>
            </div>
            <div className='m-8 rounded-[1rem] bg-white p-4 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Image
                src={'/images/icon_3.png'}
                alt='icon'
                width={60}
                height={60}
              />
              <p className='my-4 text-2xl font-semibold text-[#293393]'>
                Tiết kiệm tài chính
              </p>
              <p className='text-xl'>
                Sinh viên có thể mua thêm trang in khi cần thiết, giúp họ quản
                lý tài chính cá nhân một cách hiệu quả hơn và tránh việc tốn
                thời gian đi đến cơ sở in ấn ngoại trường.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
