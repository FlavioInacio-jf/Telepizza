import { LinkHTMLAttributes, ReactNode } from 'react'
import NextLink from 'next/link';

import styles from './styles.module.scss';

type LinkProps = LinkHTMLAttributes<HTMLLinkElement> & {
  className: ReactNode;
};

export default function Link({children, ...props}: LinkProps) {
  return (
    <a href={props.href}  className={styles.button}>

    </a>
  )
}