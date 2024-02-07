// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Index from "./pages/index";
import Header from './pages/Header';
import User from "./pages/users"
import Album from "./pages/album"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/header" element={<Header />} />
          <Route path="/album" element={<Album/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
