import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/layout/DefaultLayout";
import { Fragment } from "react";
import NotFound from "components/component/NotFound";

function App() {
  return (
    <div className="App">
      <div className="font-Montserrat">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              let Page = route.component;
              if (!route.layout || route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
