import { BrowserRouter, Routes, Route } from "react-router-dom";
import index from "./pages/index";
import Index from "./pages/index";
import Header from "./pages/Header";
import User from "./pages/users";
import Album from "./pages/album";
import Photo from "./pages/photo";
import State from "./pages/state";
import routes from "./routes";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/state" element={<State />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/header" element={<Header />} />
          <Route path="/album/:albumId" element={<Album />} />
          <Route path="/photo" element={<Photo />} /> */}
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
