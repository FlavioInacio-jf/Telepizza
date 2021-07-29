import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import nookies from 'nookies';

import { useNotification } from '../../contexts/HeaderNotificationContext';
import styles from './HeaderNotification.module.scss';

export default function HeaderNotification() {

  const { handleCloseNotification } = useNotification();

  return (
    <>
      <div className={styles.headerNotification}>
        <div className="container">
          <div className={styles.notificationBody}>
            <p>
              ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt quas necessitatibus <strong>$25,00</strong>
            </p>
            <button type="button" onClick={() => handleCloseNotification(false)}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}