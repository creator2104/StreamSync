// useAuth.ts
import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = (name: string, email: string, password: string): boolean => {
    if (name && email && password) {
      const userData: User = { name, email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading,
  };
};
