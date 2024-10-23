import React, { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

function Clock() {
  const [time, setTime] = useState(new Date());

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  useEffect(() => {
    const realTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(realTime);
  }, []);

  return (
    <div className={styles.clock}>
      {hours} : {minutes} : {seconds}
    </div>
  );
}

export default Clock;
