import { useNavigate } from "react-router-dom";

function HeaderComponents({ ruta, title }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center border-bottom">
      <div className="volver" role="button" onClick={() => navigate(ruta)}>
      <ion-icon name="arrow-back-circle"></ion-icon>{" "}
        Volver
      </div>
      <div className="d-flex flex-fill justify-content-center">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
HeaderComponents.defaultProps = {
  ruta: "../",
  title: "Titulo por defecto",
};

export default HeaderComponents;
