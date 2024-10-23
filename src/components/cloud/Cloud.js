import React from 'react';
import cloud1 from '../../assets/cloud1.png';
import cloud2 from '../../assets/cloud2.png';
import styles from './Cloud.module.scss';

function Cloud({ mobile, type }) {
  return (
    <img
      className={mobile ? styles.mobileCloud : styles.cloud}
      src={type === 'big' ? cloud1 : cloud2}
      alt=""
    />
  );
}

export default Cloud;
