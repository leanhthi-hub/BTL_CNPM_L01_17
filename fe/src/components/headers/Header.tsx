import styles from '../../style';
import Navbar from './Navbar';

const Header = ({ title }: any) => {
  return (
    <div className='w-full overflow-hidden bg-white'>
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar title={title} />
        </div>
      </div>
    </div>
  );
};

export default Header;
