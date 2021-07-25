import Link from '../Link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from './Rodape.module.scss';

export default function Rodape() {
  return (
    <footer id={styles.rodape}>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Cardápio</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
          </ul>
        </nav>

        <div className={styles.redesRodape}>
          <Link to="https://www.facebook.com/">
            <FaFacebookF />
          </Link>

          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>

          <Link to="https://twitter.com/">
            <FaTwitter />
          </Link>
        </div>
      </div>

      <div className={styles.copy}>
        <div className="container">
          <p>
            Copyright &copy; 2021 - Todos os Direitos Reservados - TelePizza.com
          </p>
        </div>
      </div>
    </footer>
  );
}