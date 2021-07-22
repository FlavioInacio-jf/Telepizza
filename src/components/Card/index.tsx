import Image from 'next/image';
import styles from './Box.module.scss';

type CardProps = {
  imageUrl: string;
  title: string;
  priceOld?: string;
  priceNew: string;
  description: string;
}

export default function Card({imageUrl, title, priceOld, priceNew}: CardProps) {
  return (
    <>
      <div className={styles.box}>
        <header className={styles.boxHeader}>
          <Image src='/' alt={title} width={300} height={300} />
        </header>

        <div className={styles.boxBody}>
          <h4>Calabresa</h4>
          <div className={styles.boxContent}>
            <p>
              Mussarela, calabresa, cebola e milho
            </p>
            <div className={styles.boxPrice}>
              <span className={styles.priceOld}>R$ 1000,00</span> <span className={styles.priceNew}>R$ 200,00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}