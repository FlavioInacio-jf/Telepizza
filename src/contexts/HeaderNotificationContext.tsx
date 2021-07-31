import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GetServerSidePropsContext } from 'next';

import nookies, { parseCookies } from 'nookies';

type NotificationProviderProps = {
  children: ReactNode;
}
type NotificationContextType = {
  isClose: Boolean;
  handleCloseNotification: (state: boolean) => void;
}

const NotificationContext = createContext({} as NotificationContextType);

export default function NotificationProvider( {children}: NotificationProviderProps) {
  const [isClose, setClose] = useState<Boolean>(true);


  function handleCloseNotification(state: boolean) {
    setClose(state);
    const stateString = String(isClose);
    nookies.set(null, 'HEADER_NOTIFICATION', stateString, {
      maxAge: 30 * 24 *60 *60,
      path: '/',
    })
  }

  useEffect(() => {
    const headerNotificationState = !!Object.values(parseCookies())[0]
    setClose(!headerNotificationState);
  }, [])

  return (
    <NotificationContext.Provider value={{
      isClose,
      handleCloseNotification,
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  return context
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const cookies = nookies.get(context);
  const notification = cookies.HEADER_NOTIFICATION;

  return {
     notification
  }
}