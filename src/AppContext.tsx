import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  avatar: string;
  setAvatar: (value: string) => void;
  level: number;
  setLevel: (value: number) => void;
  name: string;
  setName: (value: string) => void;
  isFaqShown: boolean;
  setIsFaqShown: (value: boolean) => void;
  selectedRoles: string[];
  setSelectedRoles: (value: string[]) => void;
}

const defaultContextValue: AppContextType = {
  avatar: "",
  setAvatar: () => {},
  level: 0,
  setLevel: () => {},
  name: "",
  setName: () => {},
  isFaqShown: false,
  setIsFaqShown: () => {},
  selectedRoles: [],
  setSelectedRoles: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [avatar, setAvatar] = useState("/images/purple-cat.png");
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("anonymousCat");
  const [isFaqShown, setIsFaqShown] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
        avatar,
        setAvatar,
        level,
        setLevel,
        name,
        setName,
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
