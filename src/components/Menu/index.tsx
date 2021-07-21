import { useState } from 'react';
import { FaHome, FaPizzaSlice, FaInfo, FaTruckLoading, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

import Link from '../Link';
import styles from './Menu.module.scss';

export default function Menu() {

  const [isShowMenu, setShowMenu] = useState<Boolean>(false);

  function handleShowMenu() {
    setShowMenu(!isShowMenu);
  }

  return (
    <header id={styles.header}>
      <div className="container">
        <button type="button" className={styles.menuBarButton} onClick={handleShowMenu}>
          { isShowMenu ? <FaTimes /> : <FaBars /> }
        </button>
        { isShowMenu &&
          (
            <nav className={styles.nav} onClick={handleShowMenu}>
              <div className="styles.wrap">
                <div className={'grid ' + styles.navbar}>
                  <a href="#" className="current-page"><FaHome className={styles.iconDistance} />Home</a>
                  <a href="#"><FaPizzaSlice className={styles.iconDistance} />Menu</a>
                  <a href="#"><FaTruckLoading className={styles.iconDistance} />Delivery</a>
                  <a href="#"><FaInfo className={styles.iconDistance} />About</a>
                </div>
              </div>
            </nav>
          )
        }


        <a className={styles.logo} href="/home">
          <img src="/logo.png" alt="Logo Pizzaria" />
        </a>

        <Link to={'home'}>
          <FaWhatsapp />
          Contact
        </Link>

      </div>
    </header>
  )
}