"use client";

import { createContext, useContext, useState } from "react";

interface HeroStageContextValue {
  isHeroStage1: boolean;
  setIsHeroStage1: (v: boolean) => void;
}

const HeroStageContext = createContext<HeroStageContextValue>({
  isHeroStage1: true,
  setIsHeroStage1: () => {},
});

export function HeroStageProvider({ children }: { children: React.ReactNode }) {
  const [isHeroStage1, setIsHeroStage1] = useState(true);
  return (
    <HeroStageContext.Provider value={{ isHeroStage1, setIsHeroStage1 }}>
      {children}
    </HeroStageContext.Provider>
  );
}

export function useHeroStage() {
  return useContext(HeroStageContext);
}
