
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../services/axios";

function NuevaCuenta() {
  const [tipoCuenta, setTipoCuenta] = useState("usuario");
  const cambiarCuenta = () => {
    if (tipoCuenta === "usuario") {
      setTipoCuenta("administrador");
    } else {
      setTipoCuenta("usuario");
    }
  };

  const variables = {
    username:"",
    email:"",
    fechaNac:"",
    password:""
  }

  const [values, setValues] = useState(variables);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]:value})
  }


  const Guardar = async () => {
    Axios.post("/auth/signup",{
      username: values.username,
      email: values.email,
      fechaNac: values.fechaNac,
      password: values.password
    }).then(()=>{
      console.log("Se guardaron el usuario")
    });
    setValues(variables);
  }

  const Enviar = (e) =>{
    e.preventDefault();
    Guardar();
  }

  return (
    <div className="d-flex flex-column mt-3 align-items-center">
      <h4>Crear nueva cuenta de {tipoCuenta}</h4>
      <form onSubmit={Enviar}>
        <div className="d-flex flex-column">
          <label>Nombre</label>
          <input 
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Username"/>
        </div>
        <div className="d-flex flex-column">
          <label>Correo electronico</label>
          <input 
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email" />
        </div>
        <div className="d-flex flex-column">
          <label>Contraseña</label>
          <input 
          type="password" 
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"/>
        </div>
        <div className="d-flex flex-column">
          <label>Fecha de nacimiento</label>
          <input 
          type="date"
          name="fechaNac"
          value={values.fechaNac}
          onChange={handleChange}
          placeholder="Fecha de nacimiento"/>
        </div>
        <button className="button mt-2">Crear cuenta</button>
      </form>
      <p>
        ¿Ya tienes cuenta?, inicia sesion <Link to="/">aqui.</Link>
      </p>
      <span role="button" onClick={cambiarCuenta}>
        Registrar como {tipoCuenta === "usuario" ? "administrador" : "usuario"}
      </span>
    </div>
  );
}

export default NuevaCuenta;
