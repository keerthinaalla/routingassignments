import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import ProfileList from "./ProfileList";
import PageNotFound from "./PageNotFound";
import Home from './Home'
import DashBoard from "./DashBoard";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:id" element={<ProfileList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
