import cn from 'classnames';
import React from 'react';
import styles from './Template.module.scss';

function Template({ time, children }) {
  const changeTemplateClassName = (time) => {
    switch (time) {
      case 'morning':
        return styles.morning;
      case 'afternoon':
        return styles.afternoon;
      case 'evening':
        return styles.evening;
      case 'night':
        return styles.night;
      default:
        return styles.morning;
    }
  };

  return (
    <div className={cn(styles.template, changeTemplateClassName(time))}>
      {children}
    </div>
  );
}

export default Template;
