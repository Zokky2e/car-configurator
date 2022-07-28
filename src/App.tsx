import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./shared";
import { CarSelect, Configuration, Configurator, Home, SignIn } from "./views";

function App() {
  return (
    <RecoilRoot>
      <Layout>
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
          <Route
            path="/configurator"
            element={
              <>
                <Configurator />
              </>
            }
          />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
