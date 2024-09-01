import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  isFaqShown: boolean;
  setIsFaqShown: (value: boolean) => void;
  selectedRoles: string[];
  setSelectedRoles: (value: string[]) => void;
}

const defaultContextValue: AppContextType = {
  isFaqShown: false,
  setIsFaqShown: () => {},
  selectedRoles: [],
  setSelectedRoles: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isFaqShown, setIsFaqShown] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
        isFaqShown,
        setIsFaqShown,
        selectedRoles,
        setSelectedRoles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
