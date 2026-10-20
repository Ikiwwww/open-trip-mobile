import {
  createContext,
  useState,
  useEffect,
} from "react";

import {
  getProfile,
  logout,
} from "../services/authService";

import {
  getToken,
} from "../services/tokenService";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    checkLogin();

  }, []);

  async function checkLogin() {

    try {

      const token = await getToken();

      if (!token) {

        setLoading(false);

        return;
      }

      const profile = await getProfile();

      setUser(profile);

    } catch {

      setUser(null);

    }

    setLoading(false);

  }

  async function signOut() {

    await logout();

    setUser(null);

  }

  return (

    <AuthContext.Provider

      value={{

        user,

        setUser,

        loading,

        signOut,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}