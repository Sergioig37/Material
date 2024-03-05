import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Listado } from "./components/Listado";
import { Info } from "./components/Info";
import { Detalle } from "./components/Detalle";

import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="cuerpo">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/listado" element={<Listado />}></Route>
            <Route path="/info" element={<Info />}></Route>
            <Route path="/detalle/:id" element={<Detalle/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </> 
    
  );
};
