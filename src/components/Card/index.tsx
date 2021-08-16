import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa'

import styles from './Card.module.scss';
import Link from '../Link';

type CardProps = {
  data: {
    imagemurl: {
      url: string;
    };
    id: string;
    title: string;
    priceold: number;
    pricenew: number;
    description: string;
  }
}

export default function Card({data}: CardProps) {

  return (
    <>
      <div className={styles.box}>
        <header className={styles.boxHeader}>
          <Image src={data.imagemurl.url}  alt={data.title} objectFit='fill' layout="fill" />
        </header>

        <div className={styles.boxBody}>
          <h4>{data.title}</h4>
          <div className={styles.boxContent}>
            <p>
              {data.description}
            </p>
            <div className={styles.boxPrice}>
              <div>
                <span className={styles.priceOld}>De: R$ {data.priceold.toFixed(2).replace('.', ',') || ""}</span>
                <span className={styles.priceNew}><span>Por:</span> R$ {data.pricenew.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className={styles.buttonToCard}>
                {
                  console.log(data.title.replace(' ', '%20'))
                }
                <Link
                  to={`https://api.whatsapp.com/send?phone=79992504020&text=Meu %20pedido%20%20é:%20${data.title.replace(' ', '%20')}`}   className="btn"
                  target="_blank"
                >
                  <FaWhatsapp />
                  Marker order
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}