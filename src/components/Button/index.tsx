import { AnchorHTMLAttributes, ReactNode } from 'react'
import NextLink from 'next/link';

import styles from './styles.module.scss';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  to: string;
};

export default function Button({children, to, ...props}: LinkProps) {
  return (
    <NextLink href={to} passHref>
      <a {...props} className={styles.button}>
        {children}
      </a>
    </NextLink>
  )
}