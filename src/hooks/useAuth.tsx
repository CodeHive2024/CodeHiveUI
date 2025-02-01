import React, { useState, useEffect, createContext } from "react";
import { jwtDecode } from "jwt-decode";

type UserContextType = {
  user: User | null;
  token: string | null;
  storeAuthDataInLocalStorage: (
    idToken: string,
    accessToken: string,
    refreshToken: string
  ) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  updatePfp: (pfpUrl: string) => {};
};

//username is email
type User = {
  id?: string | null;
  username: string | null;
  password?: string | null;
  firstName?: string;
  lastName?: string;
  pfpUrl?: string;
};

type IdToken = {
  email: string;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    console.log(`useAuth: ${user}, ready? ${isReady}`);
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
    }
    setIsReady(true);
  }, []);

  // Update user state then set user in local stprage
  const updatePfp = async (pfpUrl: string) => {
    if (user !== null) {
      setUser((prev) => {
        const user: User = { ...prev!, pfpUrl };
        const userStr = JSON.stringify(user);
        console.log(`Updated user: ${userStr}`);
        localStorage.setItem("user", userStr);
        return user;
      });
    } else {
      logout();
    }
  };

  // Perform login using UI form data. Save response containing token and user to local storage and state
  const storeAuthDataInLocalStorage = async (
    idToken: string,
    accessToken: string,
    refreshToken: string
  ) => {
    console.log(
      `Performing login with user: refreshToken: ${idToken} ${refreshToken}, accessToken: ${accessToken}`
    );
    const idTokenData: IdToken = jwtDecode(idToken);
    const user = {
      email: idTokenData.email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("token", accessToken);
    setToken(accessToken);
    setUser({ username: user.email });
  };

  // Returns if user is currently logged in
  const isLoggedIn = () => {
    return !!user && !!token;
  };

  // Perform logout by removing user and tokens from local storage
  const logout = () => {
    console.log("Logging user out. Deleting user and token...");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
  };

  return (
    <UserContext.Provider
      value={{
        storeAuthDataInLocalStorage,
        user,
        token,
        logout,
        isLoggedIn,
        updatePfp,
      }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
