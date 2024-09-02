import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  isNameCardActive: boolean;
  setIsNameCardActive: (value: boolean) => void;
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
  isClicked: boolean[];
  setIsClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  isFlipped: boolean[];
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const defaultContextValue: AppContextType = {
  isNameCardActive: false,
  setIsNameCardActive: () => {},
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
  isClicked: [],
  setIsClicked: () => {},
  isFlipped: [],
  setIsFlipped: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [avatar, setAvatar] = useState("/images/purple-cat.png");
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("anonymousCat");
  const [isFaqShown, setIsFaqShown] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState<boolean[]>(Array(6).fill(false));
  const [isFlipped, setIsFlipped] = useState<boolean[]>(Array(6).fill(false));
  const [isNameCardActive, setIsNameCardActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isNameCardActive,
        setIsNameCardActive,
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
        isClicked,
        setIsClicked,
        isFlipped,
        setIsFlipped,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
