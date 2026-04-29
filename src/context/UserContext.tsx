import React from 'react';
import { useGithubUser } from '../hooks/useGithubUser';

type UserContextType = ReturnType<typeof useGithubUser>;

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useGithubUser();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
