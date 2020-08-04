import React, { createContext, useState } from 'react';

import { IAppBarContext } from './types';

const AppBarContext = createContext<IAppBarContext>({} as IAppBarContext);

const AppBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [opened, setOpened] = useState<boolean>(false);

  const toggleOpened = () => {
    setOpened((prev) => !prev);
  };

  return (
    <AppBarContext.Provider value={{ opened, toggleOpened }}>
      {children}
    </AppBarContext.Provider>
  );
};

export { AppBarContext, AppBarProvider };
