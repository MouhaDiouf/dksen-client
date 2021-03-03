import React, { createContext, useContext, useState } from 'react';

export const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ColorContext.Provider value={theme}>{children}</ColorContext.Provider>
  );
};
