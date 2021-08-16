import { useState, Component } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import { FaHome, FaPizzaSlice, FaInfo, FaUsers, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

import { useNotification } from '../../contexts/HeaderNotificationContext';

import Link from '../Link';
import Button from '../Button';
import styles from './Menu.module.scss';
import HeaderNotification from '../HeaderNotification';

export default function Menu() {
  const { isClose } = useNotification();
  const [isShowMenu, setShowMenu] = useState<Boolean>();
  const [isMenuMobileOpen, setMenuMobileOpen] = useState<Boolean>(false);

  const [isMenuDesktop, setMenuDesktop] = useState<Boolean>();

  const handleMediaQueryChange = (matches: boolean) => {
    setMenuDesktop(matches);
  }

  const isLargeDevice = useMediaQuery({ minWidth: 992 }, undefined, handleMediaQueryChange);

  const classNamesMobileOpen = isMenuMobileOpen ? `${styles['menuMobileOpen']} ${styles['nav']}` : styles.nav;

  const classNamesMenuDesktop = isMenuDesktop ? `${styles['header']} ${styles['menuDesktop']}` : `${styles['header']}`;


  return (
    <>
      {isClose && <HeaderNotification />}

      <header className={classNamesMenuDesktop}>
        <div className="container">
          <button
            type="button"
            className={styles.menuBarButton}
            onClick={() => setMenuMobileOpen(!isMenuMobileOpen)}
          >
            {isMenuMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={classNamesMobileOpen} onClick={() => setMenuMobileOpen(!isMenuMobileOpen)}>
            <div className={styles.wrap}>
              <div className={'grid ' + styles.navbar} >
                <Link to="/" className="current-page"><FaHome className={styles.iconDistance} />Home</Link>
                <Link to="/Cardapio"><FaPizzaSlice className={styles.iconDistance} />Menu</Link>
                <Link to="/Contact"><FaUsers className={styles.iconDistance} />Contact</Link>
                <Link to='/About'><FaInfo className={styles.iconDistance} />About</Link>
              </div>
            </div>
          </nav>

          <Link className={styles.logoContainer} to="/">
            <Image src={'/logo.png'} alt="Logo Pizzaria" objectFit="contain" layout="fill" className={styles.logo} />
          </Link>

          <Button to={'https://api.whatsapp.com/send?phone=79992504020&text=Olá%20,%20Bem-vindo%20a%20melhor pizzaria%20do%20pais!!'} target="_blank" className={styles.button} style={{ order: 2 }}>
            <FaWhatsapp />
            Contact
          </Button>

        </div>
      </header>
    </>
  )
}