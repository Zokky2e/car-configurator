import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./shared/components";

function App() {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);
  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }
  return (
    <Layout onLogin={() => onLogin()}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>Home</div>
            </>
          }
        ></Route>
        <Route
          path="/car-select"
          element={
            <>
              <div>Car select</div>
            </>
          }
        />
        <Route
          path="/configuration"
          element={
            <>
              <div>configuration view</div>
            </>
          }
        />
        <Route path="/configurator">
          <Route
            index
            element={
              <>
                <div>Configurator - Exterior</div>
              </>
            }
          />
          <Route
            path="interior"
            element={
              <>
                <div>Configurator - Interior</div>
              </>
            }
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
