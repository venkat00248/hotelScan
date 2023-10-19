import React, { createContext, useRef, useState, FC } from 'react';

interface ContextAppProps {
  children: React.ReactNode;
}

interface ContextAppValue {
  scrolled: boolean;
  setScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  notifisystem: React.MutableRefObject<any>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const ContextApp = createContext<ContextAppValue>({
  scrolled: false,
  setScrolled: () => {},
  notifisystem: { current: null },
  keyword: '',
  setKeyword: () => {},
});

const ContextAppProvider: FC<ContextAppProps> = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const notifisystem = useRef<any>();
  const [keyword, setKeyword] = useState('');

  const contextValue: ContextAppValue = {
    scrolled,
    setScrolled,
    notifisystem,
    keyword,
    setKeyword,
  };

  return <ContextApp.Provider value={contextValue}>{props.children}</ContextApp.Provider>;
};

export default ContextAppProvider;
