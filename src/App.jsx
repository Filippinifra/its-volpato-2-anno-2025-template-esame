import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { BiPlus } from "react-icons/bi";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { SidebarLayout } from "./components/SidebarLayout";

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
      <Route path="/login" element={<div>Questa è la login!</div>} />
      <Route
        path="/singup"
        element={<div>Questa è la pagina di registrazione!</div>}
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
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
