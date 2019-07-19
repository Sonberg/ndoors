import React, { useState, useEffect } from 'react';
import { post, get } from "../api";

const IS_AUTHENTICATED = 'isAuthenticated';
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(IS_AUTHENTICATED) || false)
  const [user, setUser] = useState(null)
  const [verified, setVerified] = useState(false)

  useEffect(() => { askServer() }, [isAuthenticated]);
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem(IS_AUTHENTICATED, isAuthenticated === 'true');
      return;
    }

    localStorage.removeItem(IS_AUTHENTICATED);

  }, [isAuthenticated]);

  const askServer = async () => {
    if (verified) {
      return;
    }

    const response = await get('api/auth/authenticated');

    if (!response) {
      setIsAuthenticated(false);
      setVerified(true);
      setUser(null);
      return;
    }


    setIsAuthenticated(response.isAuthenticated);
    setUser(response.user);
    setVerified(true);
  }

  const login = async ({ email, password }) => {
    const response = await post('api/auth/login', { email, password });

    if (response.isAuthenticated === isAuthenticated) {
      return;
    }

    if (!response || !response.isAuthenticated) {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }

    setIsAuthenticated(response.isAuthenticated);
    setUser(response.user);
    return true;
  }

  const register = () => { } // register the user
  const logout = async () => {
    await post('api/auth/logout');
    setIsAuthenticated(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, register }}
      {...props} />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }