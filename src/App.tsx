import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./shared";
import { CarSelect, Configuration, Configurator, Home, SignIn } from "./views";

function App() {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
    navigate("/sign-in", { replace: true });
  }
  useEffect(() => {
    isLoggedIn
      ? navigate("/", { replace: true })
      : navigate("/sign-in", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RecoilRoot>
      <Layout isLoggedIn={isLoggedIn} onLogin={() => onLogin()}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/sign-in"
            element={
              <>
                <SignIn />
              </>
            }
          />
          <Route
            path="/car-select"
            element={
              <>
                <CarSelect />
              </>
            }
          />
          <Route
            path="/configuration"
            element={
              <>
                <Configuration />
              </>
            }
          />
          <Route path="/configurator">
            <Route
              index
              element={
                <>
                  <Configurator configuratorPart="Exterior" />
                </>
              }
            />
            <Route
              path="interior"
              element={
                <>
                  <Configurator configuratorPart="Interior" />
                </>
              }
            />
          </Route>
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
