import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/layout";
import HistorialDeServicio from "../componentes/historialDeServicio";
import Login from "../componentes/login";
import NuevaCuenta from "../componentes/nuevaCuenta";
import Home from "../componentes/home";
import Citas from "../componentes/citas";

import CitasAdmin from "../componentes/vistasAdmin/CitasAdmin";
import NotFound from "../componentes/notFound";

import Home2 from "../componentes/vistasAdmin/home";

function rutas() {
  return (
    <div>
      <Router>
        <Layout />

        <Routes>
        <Route exact path = "*" element={<NotFound/>}/>
        <Route exact path ="/" element={<Login/>}/>
        <Route exact path ="/historialServicio" element={<HistorialDeServicio/>}/>
        <Route exact path ="/nuevaCuenta" element={<NuevaCuenta/>}/>
        <Route exact path ="/home" element={<Home/>}/>
        <Route exact path ="/admin" element={<Home2/>}/>
        <Route exact path ="/citas" element={<Citas/>}/>
        <Route exact path = "/citasADM" element={<CitasAdmin/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default rutas;
