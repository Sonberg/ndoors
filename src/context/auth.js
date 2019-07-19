import React, { useState, useEffect } from 'react';
import { post } from "../api";

const EXPIRES = 'expires';
const USER = 'user';
const IS_AUTHENTICATED = 'isAuthenticated';

const AuthContext = React.createContext();

function AuthProvider(props) {
  console.log("AuthProvider");

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(IS_AUTHENTICATED) || false)
  const [user, setUser] = useState(isAuthenticated ? JSON.parse(localStorage.getItem(USER)) : null)

  useEffect(() => {
    if (isAuthenticated) {

      localStorage.setItem(IS_AUTHENTICATED, isAuthenticated);
      localStorage.setItem(USER, JSON.stringify(user));
      return;
    }

    localStorage.removeItem(USER);
    localStorage.removeItem(IS_AUTHENTICATED);

  }, [user, isAuthenticated]);

  const login = async ({ email, password }) => {
    const response = await post('api/auth/login', { email, password });

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

/*

class Auth {

  constructor() {
    this.handleChange();
  }

  handleChange = () => {
    const expires = localStorage.getItem(EXPIRES);
    const isAuthenticated = localStorage.getItem(IS_AUTHENTICATED)
    const user = localStorage.getItem(USER);

    this.isAuthenticated = expires && isAuthenticated;
    this.user = user ? JSON.parse(user) : null;
  }

  clearStorage = () => {
    localStorage.removeItem(IS_AUTHENTICATED);
    localStorage.removeItem(EXPIRES);
    localStorage.removeItem(USER);

    this.handleChange();
  }

  logout = async () => {
    await post('api/auth/logout');
    this.clearStorage();
  }

  login = async ({ email, password }) => {
    try {
      const response = await post('api/auth/login', { email, password });
      if (!response || !response.isAuthenticated) {
        return false;
      }

      localStorage.setItem(IS_AUTHENTICATED, response.isAuthenticated)
      localStorage.setItem(EXPIRES, response.expires)
      localStorage.setItem(USER, JSON.stringify(response.user));
      this.handleChange();
      return true;

    } catch (error) {
      this.clearStorage();
      return false;
    }
  }
}

export default new Auth();
*/