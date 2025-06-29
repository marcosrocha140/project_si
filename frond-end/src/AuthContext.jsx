import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLogged(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLogged(false);
      setUser(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogged(false);
    setUser(null);
    window.location.href = "/login"; // ou useNavigate, se preferir
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook de uso
export const useAuth = () => useContext(AuthContext);
