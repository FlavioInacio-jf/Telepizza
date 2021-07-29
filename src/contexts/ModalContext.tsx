import { createContext, useContext, useState, ReactNode } from 'react';

type ModalProviderProps = {
  children: ReactNode;
}

type ModalContextType = {
  isShowModal: boolean;
  handleModalShow: (state: boolean) => void;
}

const ModalContext = createContext({} as ModalContextType);

export default function ModalProvider({children}: ModalProviderProps) {

  const [ isShowModal, setShowModalState ] = useState(false);

  function handleModalShow(state: boolean) {
    setShowModalState(state);
  }
  return(
    <ModalContext.Provider value={{
      isShowModal,
      handleModalShow,
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext () {
  const context = useContext(ModalContext);
  return context;
}