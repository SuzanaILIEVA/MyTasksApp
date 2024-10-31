// ThemeContext.js
import React, {createContext, useState, useContext, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './colors';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const deviceTheme = useColorScheme(); // Cihaz temasını al
  const [theme, setTheme] = useState(
    deviceTheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    setTheme(deviceTheme === 'dark' ? darkTheme : lightTheme);
  }, [deviceTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
