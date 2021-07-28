import React, { ReactNode, useContext, createContext, useEffect, useState } from 'react';

type CardapioProviderProps = {
  children: ReactNode;
}

type MenuType = {
  imagemurl: {
    url: string;
  };
  id: string;
  title: string;
  priceold: number;
  pricenew: number;
  description: string;
}

type TestimonyType = {
  id: string;
  opinion: string;
  avatarurl: {
    url: string;
  };
  author: string;
  city: string;
  state: string;
}

type CardapioContextType = {
  menu: MenuType[];
  testimony: TestimonyType[];
}

const CardapioContext = createContext({} as CardapioContextType);

export default function CardapioProvider({ children }: CardapioProviderProps) {

  const [menu, setMenu] = useState([]);
  const [testimony, setTestimony] = useState([]);

  useEffect(() => {

    fetch("https://graphql.datocms.com/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': '0ee5f218c9a8a1ee1ec74f445ca6b3',
      },
      body: JSON.stringify({
        'query': `query {
          allMenus {
            id
            title
            description
            imagemurl {
              url
            }
            pricenew
            priceold
          }
          allTestimonies {
            id
            opinion
            avatarurl {
              url
            }
            city
            state
            author
          }
        }`})
    }).then(async (res) => {
      const dados = await res.json();

      const allTestimony = dados.data.allTestimonies
      const allMenus = dados.data.allMenus;

      setMenu(allMenus);
      setTestimony(allTestimony);
    });

  }, [])

  return (
    <CardapioContext.Provider value={{
      menu,
      testimony,
    }} >
      {children}
    </CardapioContext.Provider>
  )
}

export function useCardapio() {
  const context = useContext(CardapioContext);
  return context;
}