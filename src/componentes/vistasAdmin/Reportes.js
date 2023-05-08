import React from "react";
import HeaderComponents from "../HeaderComponents";
import exampleData from "../exampleData.json";

function Reportes() {
  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Reportes" />
      <div className="d-flex h-100">
        <div className="d-flex flex-column align-items-center w-50 border-end">
          <h4>Vehiculos registrados</h4>
          <div>
            {" "}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Número de serie</th>
                </tr>
              </thead>
              <tbody>
                {exampleData[0].vehiculos.map((el) => (
                  <tr>
                    <td>{el.id}</td>
                    <td>{el.marca}</td>
                    <td>{el.modelo}</td>
                    <td>{el.numSerie} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center flex-fill">
          <h4>Historial</h4>
          <div>
            {" "}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Servicios</th>
                  <th>Completado</th>
                </tr>
              </thead>
              <tbody>
                {exampleData[0].historial.map((el) => (
                  <tr>
                    <td>{el.id}</td>
                    <td>
                      {el.servicios.map((el, i) => (
                        <p key={i}>{`${i + 1}. ${el}`}</p>
                      ))}
                    </td>
                    <td>{el.completado ? "Sí" : "No "}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
