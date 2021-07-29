import Menu from '../../components/Menu';
import Card from '../../components/Card';
import Rodape from '../../components/Rodape';

import styles from './Cardapio.module.scss';

import { useCardapio } from '../../contexts/MenuTestimonialsContext';

export default function Cardapio() {

  const { menu } = useCardapio();

  return (
    <>
      <main className={styles.cardapio}>
        <header className={styles.cardapioHeader}>
          <div className={styles.headerWrapper}>
            <h2 className="title">Nosso cardapio completo</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cupiditate quo recusandae aliquam.</p>
          </div>
          <footer>
            <p>Showing <span>{menu.length}</span> results</p>
          </footer>
        </header>

        <section className={"section " + styles.listCardapio}>
          <div className="container">
            <div className={styles.cards}>
              {menu.map((item, index) => {
                return (
                  index < 6 && (
                    <Card data={item} key={item.id} />
                  )
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}