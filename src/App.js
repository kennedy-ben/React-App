import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
