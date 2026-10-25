import { createContext, useContext } from "react";

export const DataContext = createContext(null);

export const useData = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error("useData() called outside <DataContext.Provider>, or the provider's value is null");
  }
  return data;
};