import Link from '../Link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from './Rodape.module.scss';

export default function Rodape() {
  return (
    <footer id={styles.rodape} className="section">
      <div className="container">
        <nav className="nav-rodape">
          <ul className="navbar-nav-rodape">
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

        <div className="redes-rodape ">
          <Link to="#">
            <FaFacebookF />
          </Link>

          <Link to="#">
            <FaInstagram />
          </Link>

          <Link to="#">
            <FaTwitter />
          </Link>
        </div>
      </div>

      <div className="copy">
        <p>
          Copyright &copy 2021 - Todos os Direitos Reservados - TelePizza.com
        </p>
      </div>
    </footer>
  );
}