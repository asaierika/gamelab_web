import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  hint: string;
  setHint: (value: string) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  isNameCardActive: boolean;
  setIsNameCardActive: (value: boolean) => void;
  avatar: string;
  setAvatar: (value: string) => void;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
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
  hasSelectedRoles: boolean;
  setHasSelectedRoles: (value: boolean) => void;
}

const defaultContextValue: AppContextType = {
  hint: "",
  setHint: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
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
  hasSelectedRoles: false,
  setHasSelectedRoles: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [hint, setHint] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [avatar, setAvatar] = useState("/images/purple-cat.png");
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("anonymousCat");
  const [isFaqShown, setIsFaqShown] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>(["Guest"]);
  const [isClicked, setIsClicked] = useState<boolean[]>(Array(6).fill(false));
  const [isFlipped, setIsFlipped] = useState<boolean[]>(Array(6).fill(false));
  const [isNameCardActive, setIsNameCardActive] = useState(false);
  const [hasSelectedRoles, setHasSelectedRoles] = useState(false);

  return (
    <AppContext.Provider
      value={{
        hint,
        setHint,
        isSubmitted,
        setIsSubmitted,
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
        hasSelectedRoles,
        setHasSelectedRoles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
