import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import nookies from 'nookies';

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
    nookies.set(null, 'headerNotification', stateString, {
      maxAge: 30 * 24 *60 *60,
      path: '/',
    })
  }


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