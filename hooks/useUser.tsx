import { createContext, useContext, useState } from "react";

const UserContext = createContext<{
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
  user: boolean;
}>({
  setUser: () => {},
  user: false,
});

export function HomesProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
