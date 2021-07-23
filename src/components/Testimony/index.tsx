import styles from './Testimony.module.scss';
import Image from 'next/image';

type TestimonyProps = {
  data: {
    imageurl: string;
    text: string;
    author: string;
    cityState: string;
  }
}
export default function Testimony ({data}: TestimonyProps) {
  return (
    <blockquote className={styles.quote}>
      <p>{data.text}</p>
      <cite>
        <div className={styles.logoContainer}>
          <Image src={data.imageurl} alt={data.author} layout='fill' objectFit={'cover'} />
        </div>
        <div className={styles.cite}>
          <span>{data.author}</span>
          <span>{data.cityState}</span>
        </div>
      </cite>
    </blockquote>
  )
}