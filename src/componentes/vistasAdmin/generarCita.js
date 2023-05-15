import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../services/axios";

import { Toaster, toast } from "react-hot-toast";

import '../../css/style.css'

import Loading from "../efectos/loading";

function GenerarCita() {


// Se declaran la variables que se van a utilizar para guaradar los datos que declaramos en el modelo de la BD
  const datos = {
    _id:"",
    fecha:"",
    nombre:"",
    telefono:""
}


// Variables que se van a tomar para capturar los datos 
const [values, setValues] = useState(datos);
// Para el navigate que redireccione aqui pero con los parametros que capture con uso del Navigate
const params = useParams();
const navigate = useNavigate();


// Cambio de estado para cuando se ingrese en el formulario este lo vata capturando

const handleChange = (e) =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value})
};


// Se creo el metodo para guardar los datos

const Guardar = async (e) =>{
    Axios.post('/citas/guardarCita',{
        fecha: values.fecha,
        nombre: values.nombre,
        telefono: values.telefono
    }).then(()=>{
      toast.success('Successfully toasted!');
    });
    setValues(datos);
};

// Metodo para actualizar los datos

const updateDatos = async () => {
    await Axios.put(`/citas/actualizar/${params.id}`,{
        fecha: values.fecha,
        nombre: values.nombre,
        telefono: values.telefono
    }).then(()=>{
        console.log("Se actualizaron los datos")
    })

    navigate('/citasADM')
};

// Este es un metodo el cual va a obtener los datos del datos que se vaya a obtener mendiante el ID
// Por lo que solo se mostraran los datos que este relacionado con ese ID

const consultarUnaCita = async (id) =>{
  const buscarCita = await Axios.get("/citas/consultarUnaCita/" + id);
  setValues(buscarCita.data);
};


// El  metodo para enviar los datos que se capturen del otro metodo para guardar
const enviar = (e) =>{
    e.preventDefault();
    if(values._id===""){
        Guardar();
    }else{
        updateDatos();
    }
};

// El useEffect sirve para que cuando se actualize la pagina los datos se sigan mostrando y no
// Se borren depues de actualizar la pagina o solamente se mueeste una vez
useEffect(()=>{
  consultarUnaCita(params.id);
}, [params.id]);

// Creamos constante para que ve lo estado en el que inciara el loading
  const [loading, setLoading] = useState(true);

  // Definimos un tiempo el cual se mostrara y que se pase del estado verdadero a falso
    setTimeout(()=>{
      setLoading(false);
    }, 500)
 

// Una funcion de decicion el que mostrara si se esta en verdadero loading cargara el componene
  if (loading){
    return(
      // Aqui se manda a llamar el componente que se creo e importo se puede visualiza en la linea 9
      <Loading/>
    )
    // Dentro del else si la funcion deja de ser vedadero mostrara el contenido
  }else{
    return (
    <div className="container">
      <h1>Agendar Citas</h1>
      <form onSubmit={enviar}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <h5>Asigne la fecha</h5>
          </span>
          <input
            type="date"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            name="fecha"
            value={values.fecha}
            onChange={handleChange}
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <h5>Nombre de quien corresponda la cita</h5>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <h5>Telefono</h5>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
          />
        </div>

        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-warning">
            <Link className="regresar" to="/admin">
            Regresar
            </Link>
          </button>
          &nbsp;
          <button type="button" class="btn btn-outline-danger">
            Cancelar
          </button>
          &nbsp;
          
            <input class="btn btn-outline-primary" type="submit" value={values._id === "" ? "Confirmar" : "Actualizar"}/>
          
        </div>
      </form>
    </div>
  );
  }

    
  
}

export default GenerarCita;
