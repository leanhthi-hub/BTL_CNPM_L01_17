import React from 'react';

import styles from '@/style';

const Footer = () => {
  return (
    <div className={` ${styles.flexCenter}`}>
      <div
        className={`box-shadow border-t-[0.5px] px-8 py-4 text-xl font-normal ${styles.boxWidth}`}
      >
        Ⓒ 2023. Dịch vụ in ấn HCMUT_SSPS
      </div>
    </div>
  );
};

export default Footer;
