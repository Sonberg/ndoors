import React, { useState, useEffect } from 'react';
import { post, get } from "../api";

const TOKEN = 'token';
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(TOKEN) !== null)
  const [user, setUser] = useState(null)
  const [verified, setVerified] = useState(false)

  const token = localStorage.getItem(TOKEN);

  useEffect(() => { askServer() }, [isAuthenticated]);
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem(TOKEN);
      return;
    }

    if (user && user.token) {
      localStorage.setItem(TOKEN, user.token);
    }

  }, [isAuthenticated]);

  const askServer = async () => {
    if (verified) {
      return;
    }

    try {
      if (!token) {
        throw new Error();
      }

      const response = await get('api/users/me');

      if (!response) {
        throw new Error();
      }

      setUser(response);
      setVerified(true);
      setIsAuthenticated(true);

    } catch (error) {
      setIsAuthenticated(false);
      setVerified(true);
      setUser(null);
    }
  }

  const login = async ({ email, password }) => {
    const response = await post('api/users/token', {
      email,
      password
    }, { serialize: false });

    if (!response) {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }

    setUser(response);
    setIsAuthenticated(true);
    return true;
  }

  const register = () => { } // register the user
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, register }}
      {...props} />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }