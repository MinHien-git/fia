import React, { Context, useState } from "react";
import {
  SearchContextType,
  Search_Interface,
} from "../interfaces/app_interfaces";

export const SearchContext = React.createContext<SearchContextType | null>(
  null
);

export function SearchProvider({ children }) {
  const [search, setSearch] = useState<Search_Interface | undefined>(undefined);
  const clearSearch = () => {
    if (search) {
      setSearch(undefined);
    }
  };

  const startSearch = (search_param: Search_Interface) => {
    setSearch(search_param);
  };

  return (
    <SearchContext.Provider value={{ search, clearSearch, startSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
