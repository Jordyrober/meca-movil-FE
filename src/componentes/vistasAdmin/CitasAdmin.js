import React, { useEffect, useState } from "react";
import Axios from "../../services/axios";

import HeaderComponents from "../HeaderComponents";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";


function CitasAdmin() {
  const [cita, setCita] = useState([]);
  const navigate = useNavigate();

  const Consultar = async () => {
    const consulta = await Axios.get("citas/consultarCita");
    setCita(consulta.data);
    console.log(consulta.data);
  };

  const Eliminar = async (id) => {
    if (window.confirm("Esta seguro de eliminar esta cita")) {
      await Axios.delete(`citas/eliminar/${id}`);
      toast('Se elimino correctamente', {
        icon: '🗑',
      });
    }
    Consultar();
  };


  useEffect(() => {
    Consultar();
  }, []);

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
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {cita.map((citas, index) => (
                <tr>
                  <td>{citas._id}</td>
                  <td>{citas.fecha}</td>
                  <td>
                    {citas.nombre} {citas.apellidoPat} {citas.apellidoMat}
                  </td>
                  <td>{citas.telefono}</td>
                  <td>
                    <buttton 
                    className="btn btn-primary"
                    onClick={()=>navigate(`/agendarCita/${citas._id}`) }
                    >Modificar</buttton>
                    &nbsp;
                    <button 
                    type="button" 
                    onClick={() => Eliminar(citas._id)}
                    className="btn btn-danger">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }


export default CitasAdmin;
