import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.png";

import "../css/style.css";

function Header() {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            {!location.match("admin") && (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/historialServicio"
                  >
                    Historial de servicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/citas">
                    Citas
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link disabled dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Registrar Vehiculo
                  </a>
                </li>
              </ul>
            )}

            {location.match("admin") && (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="">
                    Vehiculos en taller
                  </Link>
                </li>
                

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Citas
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/agendarCita">
                        Generar Citas
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/citasADM">
                        Ver Citas
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Reportes
                  </a>
                </li>
              </ul>
            )}

            <form class="d-flex" role="search">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <ion-icon name="accessibility-outline"></ion-icon>
              </button>
              <ul className="dropdown-menu">
                <div className="p-2">
                  <Link className="btn btn-danger" to="/">
                    Cerrar Sesion
                  </Link>
                </div>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
