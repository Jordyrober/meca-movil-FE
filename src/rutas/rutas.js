import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/layout";
import HistorialDeServicio from "../componentes/historialDeServicio";

function rutas() {
  return (
    <div>
      <Router>
        <Layout />

        <Routes>
        <Route exact path ="/historialServicio" element={<HistorialDeServicio/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default rutas;
