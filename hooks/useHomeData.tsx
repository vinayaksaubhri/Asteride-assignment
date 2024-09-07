import { createContext, useContext, useState } from "react";
import homesData from "../assets/homes.json"; // Mock data
import { generateDelay } from "../utils";
import { homeDataType } from "../types";

const HomeContext = createContext<{
  homes: homeDataType[];
  fetchHomes: () => void;
  loading: boolean;
}>({
  homes: [],
  fetchHomes: () => {},
  loading: false,
});

export function HomesProvider({ children }: { children: React.ReactNode }) {
  const [homes, setHomes] = useState<[] | homeDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHomes = async () => {
    setLoading(true);
    try {
      await generateDelay(2000); // Simulate network delay
      setHomes(homesData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <HomeContext.Provider
      value={{
        homes,
        fetchHomes,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeData = () => {
  return useContext(HomeContext);
};
