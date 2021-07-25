import styles from './Testimony.module.scss';
import Image from 'next/image';

type TestimonyProps = {
  clienteInformation : {
    id: number;
    text: string;
    imageurl: string;
    author: string;
    cityState: string;
  }
}
export default function Testimony ({clienteInformation}: TestimonyProps) {
  return (
    <blockquote className={styles.quote}>
      <p>{clienteInformation.text}</p>
      <cite>
        <div className={styles.logoContainer}>
          <Image src={clienteInformation.imageurl} alt={clienteInformation.author} layout='fill' objectFit={'cover'} />
        </div>
        <div className={styles.cite}>
          <span>{clienteInformation.author}</span>
          <span>{clienteInformation.cityState}</span>
        </div>
      </cite>
    </blockquote>
  )
}