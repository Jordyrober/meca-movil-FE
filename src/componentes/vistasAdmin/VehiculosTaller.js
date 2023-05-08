import React from "react";
import HeaderComponents from "../HeaderComponents";
import exampleData from "../exampleData.json";

function VehiculosTaller() {
  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Vehiculos en taller" />
      <div className="mt-3 container">
        <table className="table text-center table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehiculo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {exampleData[0].vehiculos.map((el) => (
              <tr>
                <td>{el.id}</td>
                <td>{el.marca}</td>
                <td>{el.descripcion} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehiculosTaller;
