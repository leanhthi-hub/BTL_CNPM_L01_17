import Image from 'next/image';

import { down_arrow, logo, profile, vietnam } from '@/assets';

import Navbar from './Navbar';
import styles from '../../style';

const Header = ({ title }: any) => {
  return (
    <div className='box-shadow w-full overflow-hidden border-gray-500 bg-white px-8 '>
      <div className={` ${styles.flexCenter}`}>
        <div
          className={`${styles.boxWidth} flex flex-row items-center justify-between py-4`}
        >
          <Image src={logo} className='w-32' alt='' />
          <Navbar title={title} />
          <div className='flex flex-row items-center gap-4'>
            <div className='flex flex-row items-center gap-2'>
              <Image src={profile} className='w-12' alt='' />
              <Image src={down_arrow} className='w-5' alt='' />
            </div>
            <Image src={vietnam} className='w-10' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
