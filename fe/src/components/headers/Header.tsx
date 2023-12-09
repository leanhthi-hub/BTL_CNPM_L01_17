import { down_arrow, logo, profile, vietnam } from '@/assets';

import Navbar from './Navbar';
import NextImage from '../NextImage';
import styles from '../../style';

const Header = ({ title }: any) => {
  return (
    <div className='box-shadow w-full overflow-hidden border-gray-500 bg-white px-8 '>
      <div className={` ${styles.flexCenter}`}>
        <div
          className={`${styles.boxWidth} flex flex-row items-center justify-between py-4`}
        >
          <NextImage src={logo} className='w-32' />
          <Navbar title={title} />
          <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center gap-2'>
              <NextImage src={profile} className='w-14' />
              <NextImage src={down_arrow} className='w-14' />
            </div>
            <NextImage src={vietnam} className='w-14' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
