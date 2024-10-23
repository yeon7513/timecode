import React from 'react';
import afternoonPhone from '../../assets/phone_afternoon.png';
import eveningPhone from '../../assets/phone_evening.png';
import morningPhone from '../../assets/phone_morning.png';
import nightPhone from '../../assets/phone_night.png';

function Phone({ time }) {
  const changePhoneImg = (time) => {
    switch (time) {
      case 'morning':
        return morningPhone;
      case 'afternoon':
        return afternoonPhone;
      case 'evening':
        return eveningPhone;
      case 'night':
        return nightPhone;
      default:
        return morningPhone;
    }
  };

  return <img src={changePhoneImg(time)} alt="" />;
}

export default Phone;
