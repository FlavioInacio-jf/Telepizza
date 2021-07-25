import styles from './Testimony.module.scss';
import Image from 'next/image';

type TestimonyProps = {
  clienteInformation : {
    id: string;
    opinion: string;
    avatarurl: {
      url: string;
    };
    author: string;
    city: string;
    state: string;
  }
}
export default function Testimony ({clienteInformation}: TestimonyProps) {
  return (
    <blockquote className={styles.quote}>
      <p>{clienteInformation.opinion}</p>
      <cite>
        <div className={styles.logoContainer}>
          <Image src={clienteInformation.avatarurl.url} alt={clienteInformation.author} layout='fill' objectFit={'cover'} />
        </div>
        <div className={styles.cite}>
          <span>{clienteInformation.author}</span>
          <span>{clienteInformation.city}|{clienteInformation.state}</span>
        </div>
      </cite>
    </blockquote>
  )
}