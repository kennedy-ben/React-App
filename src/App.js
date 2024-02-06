// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Index from "./pages/index";
import Header from './pages/Header';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
