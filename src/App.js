// import logo from './logo.svg';
// import './App.css';
// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Index from "./pages/index";
import Header from './pages/Header';
import User from "./pages/users"
import Album from "./pages/album"
import UserPage from './pages/users';
import Photo from './pages/photo'

function App() {
  
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path="/userpage/:id" component={UserPage} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/header" element={<Header />} />
          <Route path="/album" element={<Album/>} />
          <Route path="/photo" element={<Photo/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
