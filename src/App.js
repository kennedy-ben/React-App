import { Routes, Route, HashRouter } from "react-router-dom";
import routes from "./routes";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          {routes.map((route, index) => {
            const { Element, path } = route;
            if (route.isAuthenticated) {
              return (
                <Route
                  exact
                  key={index}
                  path={path}
                  element={
                    <AuthWrapper>
                      <Element />
                    </AuthWrapper>
                  }
                />
              );
            } else {
              return <Route exact key={index} path="/" element={<Element />} />;
            }
          })}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
