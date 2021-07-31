import PageIntroduction from '../../components/PageIntroduction';

import styles from './About.module.scss';

export default function About() {
  return (
    <main>
      <section className={styles.about}>
        <PageIntroduction style={{ background: 'radial-gradient( #d92027, #DD1D86)' }}>

          <div className={styles.headerWrapper}>
            <h2 className="title">About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cupiditate quo recusandae aliquam.</p>
          </div>
        </PageIntroduction>
        <section className="section">
          <div className="container">
            oi
          </div>
        </section>
      </section>
    </main>
  );
}