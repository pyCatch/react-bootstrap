import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Navibar} from "./components/Navibar"
import {Footer} from "./components/Footer";

import {Home} from "./pages/Home";
import {Users} from "./pages/Users";
import {About} from "./pages/About";


function App() {
  return (
      <>
          <BrowserRouter>
              <Navibar/>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/users"} element={<Users/>}/>
                  <Route path={"/about"} element={<About/>}/>
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>
  )
}

export default App;
