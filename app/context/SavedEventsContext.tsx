
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SavedEventsContextType = {
  savedEvents: number[];
  toggleSaveEvent: (eventId: number) => void;
};

const SavedEventsContext = createContext<SavedEventsContextType | undefined>(
  undefined
);

export function SavedEventsProvider({ children }: { children: ReactNode }) {
  const [savedEvents, setSavedEvents] = useState<number[]>([]);

  const toggleSaveEvent = (eventId: number) => {
    setSavedEvents((current) =>
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId]
    );
  };

  return (
    <SavedEventsContext.Provider value={{ savedEvents, toggleSaveEvent }}>
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const context = useContext(SavedEventsContext);

  if (!context) {
    throw new Error(
      "useSavedEvents must be used within a SavedEventsProvider"
    );
  }

  return context;
}
