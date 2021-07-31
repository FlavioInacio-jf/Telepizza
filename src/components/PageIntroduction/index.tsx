import { ReactNode, AllHTMLAttributes, HTMLAttributes} from 'react';
import styles from './PageIntroduction.module.scss';

type PageIntroductionProps = AllHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}
export default function PageIntroduction({ children, ...props }: PageIntroductionProps) {
  return (
    <>
      <header className={styles.cardapioHeader} {...props}>
        {children}
      </header>
    </>
  );
}