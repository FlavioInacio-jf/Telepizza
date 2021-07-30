import { AnchorHTMLAttributes, ReactNode } from 'react'
import NextLink from 'next/link';


type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  to: string;
};

export default function Link({children, to, ...props}: LinkProps) {
  return (
    <NextLink href={to}  passHref >
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}