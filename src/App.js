import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Index from "./pages/index";
import Header from "./pages/Header";
import User from "./pages/users";
import Album from "./pages/album";
import Photo from "./pages/photo";
import State from "./pages/state";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/state" element={<State />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/header" element={<Header />} />
          <Route path="/album/:albumId" element={<Album />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
