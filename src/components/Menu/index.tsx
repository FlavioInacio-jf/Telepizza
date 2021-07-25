import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { FaHome, FaPizzaSlice, FaInfo, FaTruckLoading, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

import Link from '../Link';
import Button from '../Button';
import styles from './Menu.module.scss';

export default function Menu() {

  const [isShowMenu, setShowMenu] = useState<Boolean>(false);
  const router = useRouter();

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
                  <Link to="/" className="current-page"><FaHome className={styles.iconDistance} />Home</Link>
                  <Link to="#"><FaPizzaSlice className={styles.iconDistance} />Menu</Link>
                  <Link to="#"><FaTruckLoading className={styles.iconDistance} />Delivery</Link>
                  <Link to="/Contact"><FaInfo className={styles.iconDistance} />About</Link>
                </div>
              </div>
            </nav>
          )
        }


        <Link className={styles.logoContainer} to="/">
          <Image src={'/logo.png'}  alt="Logo Pizzaria" objectFit="contain"  layout="fill" className={styles.logo}/>
        </Link>

        <Button to={'https://api.whatsapp.com/send?phone=79992504020&text=Olá%20,%20Bem-vindo%20a%20melhor pizzaria%20do%20pais!!'} target="_blank">
          <FaWhatsapp />
          Contact
        </Button>

      </div>
    </header>
  )
}