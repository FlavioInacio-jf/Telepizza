import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import styles from './HeaderNotification.module.scss';

export default function HeaderNotification() {

  const [isClose, setClose] = useState<Boolean>(false);

  function handleCloseNotification() {
    setClose(!isClose);
  }

  return (
    <>
      {!isClose && (
        <div className={styles.headerNotification}>
          <div className="container">
            <div className={styles.notificationBody}>
              <p>
                ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt quas necessitatibus <strong>$25,00</strong>
              </p>
              <button type="button" onClick={handleCloseNotification}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}