import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authRoutes, unauthRoutes } from "../App";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const push = useNavigate();
  const { pathname } = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const isNotExistingRoute = ![...unauthRoutes, ...authRoutes].some(
      (r) => r === pathname
    );
    const isAuthRoute = authRoutes.some((r) => r === pathname);
    const isUnAuthRoute = unauthRoutes.some((r) => r === pathname);

    if (!user && (isAuthRoute || isNotExistingRoute)) {
      push("/login");
    }
    if (user && (isUnAuthRoute || isNotExistingRoute)) {
      push("/");
    }
  }, [user]);

  const onLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    push("/login");
  };

  const onLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    push("/");
  };

  return (
    <UserContext.Provider value={{ user, onLogout, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
