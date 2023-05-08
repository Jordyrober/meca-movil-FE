import React, { useEffect, useState } from "react";
import Axios from "../../services/axios";

import HeaderComponents from "../HeaderComponents";

function CitasAdmin() {

  const [cita, setCita] = useState([]);

  const Consultar = async () =>{
    const consulta = await Axios.get("/citas/consultarCita");
    setCita(consulta.data);
    console.log(consulta.data);
  }

  useEffect(() => {
    Consultar();
  }, [])

  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Citas pendientes" />
      <div className="mt-3 container">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>ID cita</th>
              <th>Fecha</th>
              <th>Nombre del usuario</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {cita.map((citas, index) => (
              <tr>
                <td>{citas._id}</td>
                <td>{citas.nombre}</td>
                <td>{citas.usuario}</td>
                <td>{citas.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CitasAdmin;
