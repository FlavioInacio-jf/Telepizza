import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <>
      <Menu />
      <main>
        <section className={"section " + styles.contact}>
          <div className="container">
            <h2 className="title">Make your Order</h2>
            <div className={styles.contactContent} >
              <form id="form-contact" className={styles.formContact}>
                <div className="wrap-name">
                  <label>Name</label>
                  <input type="text" id="name" required />
                </div>

                <div className="wrap-email">
                  <label>E-mail</label>
                  <input type="email" id="email" required />
                </div>

                <div className="wrap-adress">
                  <label>Address</label>
                  <input type="text" id="adress" required />
                </div>

                <div className="wrap-how-many">
                  <label>How many?</label>
                  <input type="number" min="1" max="10" />
                </div>
                <div className="wrap-telephone">
                  <label>Telephone number</label>
                  <input type="tel" id="telephone" placeholder="xx-xxxxx-xxxx" required />
                </div>
                <div className="wrap-order">
                  <label>Comments/Questions</label>
                  <textarea id="order" required>Mais de um sabor? Informe o saboes separados por virgula</textarea>
                </div>
                <div className="wrap-submit">
                  <button type="submit" className="btn">Enviar</button>
                </div>
              </form>

              <div className="contact-data">
                <h3 className="title-contact">Dados contato</h3>
                <ul className="contact-adress">
                  <li>- +55 7 8954-5423</li>
                  <li>- pedidos@telepizza.com</li>
                  <li>- Rua Gracho Cardoso - Brasília</li>
                  <li>- Avenida Brasil - Rio de janeiro</li>
                </ul>

                <h2 className="title-contact">Redes Sociais</h2>
                <ul className="redes-contact">
                  <li>
                    <a href="">

                    </a>
                  </li>

                  <li>
                    <a href="">

                    </a>
                  </li>

                  <li>
                    <a href="">

                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Rodape />
    </>
  );
}