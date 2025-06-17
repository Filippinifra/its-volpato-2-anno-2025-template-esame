import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { SWRConfig } from "swr";
import { Button } from "./components/Button";
import { ContentScreenCentered } from "./components/ContentScreenCentered";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { SidebarLayout } from "./components/SidebarLayout";
import { HomePanel } from "./panels/HomePanel";
import { axiosWithToken } from "./utils/axios";
import { getUser } from "./utils/token";

export const authRoutes = ["/", "/add-new"];
export const unauthRoutes = ["/login", "/signup"];

const fetcher = (url) => axiosWithToken.get(url).then((data) => data.data);

const AppRoutes = () => {
  const push = useNavigate();
  const { pathname } = useLocation();

  const [user, setUser] = useState(getUser());

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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SidebarLayout
            boxAction={
              <Button
                onClick={() => {
                  push("/add-new");
                }}
                icon={<BiPlus />}
              >
                Aggiungi
              </Button>
            }
            user={user}
            onLogout={onLogout}
          >
            <HomePanel />
          </SidebarLayout>
        }
      />
      <Route
        path="/login"
        element={
          <ContentScreenCentered>
            <Login
              onLogin={(user) => {
                setUser(user);
              }}
            />
          </ContentScreenCentered>
        }
      />
      <Route
        path="/signup"
        element={
          <ContentScreenCentered>
            <Registration />
          </ContentScreenCentered>
        }
      />
      <Route
        path="/add-new"
        element={
          <SidebarLayout user={user} onLogout={onLogout}>
            Questa è la pagina per aggiungere un elemento!
          </SidebarLayout>
        }
      />
      <Route
        path="*"
        element={
          <div>
            Nessuna rotta trovata, torna alla home{" "}
            <button
              onClick={() => {
                push("/");
              }}
            >
              Home
            </button>
          </div>
        }
      />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <AppRoutes />
      </SWRConfig>
    </BrowserRouter>
  );
};

export default App;
