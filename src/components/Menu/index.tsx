import { useState } from 'react';
import Image from 'next/image';

import { FaHome, FaPizzaSlice, FaInfo, FaUsers, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

import { useNotification } from '../../contexts/HeaderNotificationContext';

import Link from '../Link';
import Button from '../Button';
import styles from './Menu.module.scss';
import HeaderNotification from '../HeaderNotification';

export default function Menu() {

  const [isShowMenu, setShowMenu] = useState<Boolean>(false);
  const { isClose } = useNotification();

  function handleShowMenu() {
    setShowMenu(!isShowMenu);
  }

  return (
    <>
      { isClose && <HeaderNotification />}

      <header id={styles.header}>
        <div className="container">
          <button type="button" className={styles.menuBarButton} onClick={handleShowMenu}>
            {isShowMenu ? <FaTimes /> : <FaBars />}
          </button>
          {isShowMenu &&
            (
              <nav className={styles.nav} onClick={handleShowMenu}>
                <div className={styles.wrap}>
                  <div className={styles.logoContainer}>
                    <button type="button" onClick={handleShowMenu}>
                      <FaTimes />
                    </button>
                    <Image src={'/logo.png'} alt="Logo Pizzaria" objectFit="fill" layout="fill" className={styles.logo} />
                  </div>
                  <div className={'grid ' + styles.navbar}>
                    <Link to="/" className="current-page"><FaHome className={styles.iconDistance} />Home</Link>
                    <Link to="/Cardapio"><FaPizzaSlice className={styles.iconDistance} />Menu</Link>
                    <Link to="/Contact"><FaUsers className={styles.iconDistance} />Contact</Link>
                    <Link to="/"><FaInfo className={styles.iconDistance} />About</Link>
                  </div>
                </div>
              </nav>
            )
          }


          <Link className={styles.logoContainer} to="/">
            <Image src={'/logo.png'} alt="Logo Pizzaria" objectFit="contain" layout="fill" className={styles.logo} />
          </Link>

          <Button to={'https://api.whatsapp.com/send?phone=79992504020&text=Olá%20,%20Bem-vindo%20a%20melhor pizzaria%20do%20pais!!'} target="_blank">
            <FaWhatsapp />
            Contact
          </Button>

        </div>
      </header>
    </>
  )
}