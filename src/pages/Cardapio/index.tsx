import Menu from '../../components/Menu';
import Card from '../../components/Card';
import Rodape from '../../components/Rodape';

import styles from './Cardapio.module.scss';

import { useCardapio } from '../../contexts/MenuTestimonialsContext';

export default function Cardapio() {

  const { menu } = useCardapio();

  return (
    <>
      <Menu />
      <main>
        <section className={"section " + styles.cardapio}>
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

      <Rodape />
    </>
  );
}