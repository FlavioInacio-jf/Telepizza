import React, { ReactNode ,createContext, useEffect, useState } from 'react';

type CardapioProviderProps = {
  children: ReactNode;
}
export const CardapioContext = createContext([]);

export default function CardapioProvider({ children }: CardapioProviderProps) {


  return (

      <div> oi</div>
  )
}