import Head from 'next/head';
import Card from '../components/Card';
import HeaderNotification from '../components/HeaderNotification';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import NotificationProvider from '../contexts/HeaderNotificationContext';

import CardapioProvider from '../contexts/MenuTestimonialsContext';
import ModalProvider from '../contexts/ModalContext';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=10, minimum-scale=1.0"></meta>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <CardapioProvider >
        <ModalProvider>
          <NotificationProvider>
            <Menu />
          </NotificationProvider>
            <Component {...pageProps} />
          <Rodape />
        </ModalProvider>

      </CardapioProvider>
    </>
  );
}

export default MyApp
