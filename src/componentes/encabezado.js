import { Link, useLocation } from "react-router-dom";

function Encabezado() {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <div>
      <nav class="navbar bg-dark " data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            {!location.match("admin") && (
              <ul class="navbar-nav">
                <li class="nav-item">
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
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Registrar Vehiculo
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            )}

            {location.match("admin") && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/historialServicio"
                  >
                    Vehiculos en Taller
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Citas
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Reportes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Encabezado;
