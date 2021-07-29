import { FaTimes, FaPizzaSlice } from 'react-icons/fa'
import styles from './Modal.module.scss';
import Button from '../Button';

import Image from 'next/image';
import { useModalContext } from '../../contexts/ModalContext';

type ModalProps = {
  name? : string;
}
export default function Modal ({ name }: ModalProps) {

  const { handleModalShow } = useModalContext();

  return(
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <header>
            <div>
              <Image src={"/order-confirmed.svg"} layout="fill" objectFit="contain" alt="Order confirmed image" />
            </div>

            <button type="button" onClick={()=> handleModalShow(false)}><FaTimes /></button>
          </header>
          <h4> Parabéns, <span>{name || ''} </span>!! <br />Seu pedido foi realizado com sucesso!!!</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate soluta placeat aliquam</p>
          <footer>
            <button className="btn" type="button" onClick={()=> handleModalShow(false)}>
              <FaTimes />
              Close
            </button>

            <Button to='/Cardapio' onClick={() => handleModalShow(false)}>
              <FaPizzaSlice />
              See all menu
            </Button>
          </footer>
        </div>
      </div>
    </>
  );
}