'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import NextImage from '../NextImage';
import { close, icon_1, menu, vietnam } from '../../assets/index';
import { navLinks } from '../../constant/index';
// import { ai_logo, close, menu, tensor_logo } from '../../assets/index';

const Navbar = ({ title }: any) => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header className=''>
      <ul className='hidden list-none justify-center md:flex md:flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`mg:text-[16px] ml-3 cursor-pointer font-medium tracking-[0.1px] md:text-[14px] lg:text-[18px] ${
              active === nav.id ? 'text-blue-600' : 'text-gray-900'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mg:mr-10 md:mr-4'}`}
            onClick={() => setActive(nav.id)}
          >
            {' '}
            {nav.title == 'Máy in' || nav.title == 'Lịch sử in ấn' ? (
              <div>{nav.title}</div>
            ) : (
              <Link href={nav.id}>{nav.title}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-end pr-4 md:hidden'>
        <Image
          src={toggle ? close : menu}
          alt='menu'
          className='h-[30px] w-[30px]'
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div
            className={`
            sidebar
          absolute right-0 top-20 mx-4 my-1 flex min-w-[140px] rounded-xl bg-white p-6`}
          >
            <ul className='flex flex-1 list-none flex-col items-start justify-end'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? 'text-black' : 'text-black'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => {
                    setActive(nav.id);
                    setToggle(false);
                  }}
                >
                  <Link href={nav.id}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
