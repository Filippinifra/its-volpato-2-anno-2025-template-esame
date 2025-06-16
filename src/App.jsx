import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { BiPlus } from "react-icons/bi";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { ContentScreenCentered } from "./components/ContentScreenCentered";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { SidebarLayout } from "./components/SidebarLayout";
import { UserProvider } from "./context/userContext";

export const authRoutes = ["/", "/add-new"];
export const unauthRoutes = ["/login", "/signup"];

const AppRoutes = () => {
  const push = useNavigate();

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
          >
            Questa è la home!
            <Card titolo={"bella!"} />
            <Card titolo={"brutta!"} />
          </SidebarLayout>
        }
      />
      <Route
        path="/login"
        element={
          <ContentScreenCentered>
            <Login />
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
          <SidebarLayout>
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
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
