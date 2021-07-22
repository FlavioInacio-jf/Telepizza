import Image from 'next/image';
import styles from './Card.module.scss';

type CardProps = {
  data: {
    imageUrl: string;
    title: string;
    priceOld: string;
    priceNew: string;
    description: string;
  }
}

export default function Card({data}: CardProps) {
  return (
    <>
      <div className={styles.box}>
        <header className={styles.boxHeader}>
          <Image src={data.imageUrl}  alt={data.title} objectFit='fill' layout="fill" />
        </header>

        <div className={styles.boxBody}>
          <h4>{data.title}</h4>
          <div className={styles.boxContent}>
            <p>
              {data.description}
            </p>
            <div className={styles.boxPrice}>
              <span className={styles.priceOld}>R$ {data.priceOld || ""}</span> <span className={styles.priceNew}>R$ {data.priceNew}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}