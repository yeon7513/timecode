import React from 'react';
import styles from './ThemeChangeButton.module.scss';

function ThemeChangeButton({ label, onClick }) {
  return (
    <button className={styles.changeBtn} onClick={() => onClick}>
      {label}
    </button>
  );
}

export default ThemeChangeButton;
