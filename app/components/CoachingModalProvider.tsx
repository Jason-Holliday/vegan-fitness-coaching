"use client";

import { createContext, useContext, useMemo, useState } from "react";

type CoachingModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CoachingModalContext = createContext<CoachingModalContextValue | null>(
  null,
);

export function CoachingModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <CoachingModalContext.Provider value={value}>
      {children}
    </CoachingModalContext.Provider>
  );
}

export function useCoachingModal() {
  const context = useContext(CoachingModalContext);
  if (!context) {
    throw new Error(
      "useCoachingModal must be used within a CoachingModalProvider",
    );
  }
  return context;
}
