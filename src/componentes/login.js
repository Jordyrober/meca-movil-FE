import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    navigate("home");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Este es un envio")
  }

  return (
    <div className="d-flex flex-column mt-3 align-items-center">
      <h4>Inicia sesion</h4>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column">
          <label>Correo electronico</label>
          <input 
          type="email" 
          value={email} 
          name="Email"
          placeholder="Email"
          onChange={({target})=> setEmail(target.value)}
          />
        </div>
        <div className="d-flex flex-column">
          <label>Contraseña</label>
          <input type="password" 
          value={password}
          name="Password"
          placeholder="Password"
          onChange={({target})=> setPassword(target.value)}/>
        </div>
        <button type="submit" className="button mt-2">
          Iniciar sesion
        </button>
      </form>
      <p>
        O crea una cuenta <Link to="/nuevaCuenta">aqui.</Link>
      </p>
      <Link to="admin">Ver como admin</Link>
    </div>
  );
}

export default Login;
