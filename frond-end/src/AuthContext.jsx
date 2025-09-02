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

<<<<<<< HEAD
=======
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLogged(true);
    setUser(userData);
  };

>>>>>>> 8c532c4 (updates)
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogged(false);
    setUser(null);
<<<<<<< HEAD
    window.location.href = "/login"; // ou useNavigate, se preferir
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, logout }}>
=======
    window.location.href = "/login"; // ou useNavigate()
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, login, logout }}>
>>>>>>> 8c532c4 (updates)
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
// Hook de uso
=======
>>>>>>> 8c532c4 (updates)
export const useAuth = () => useContext(AuthContext);
