import {
  useState, useEffect, useContext, createContext,
} from 'react';

const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  function getUsername() {
    // getting stored state
    const temp = localStorage.getItem('username');
    const savedUsername = JSON.parse(temp);
    return savedUsername || '';
  }

  const [user, setUser] = useState(getUsername());
  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
