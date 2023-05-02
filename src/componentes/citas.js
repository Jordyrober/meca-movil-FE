import React from 'react'

function Citas() {
    const variables = {
        nombre:"",
        apellidoPat:"",
        apellidoMat:"",
        matricula:"",
        modeloVeh:"",
        modAño:"",
        telefono:"",
        correo:"",
        fecha:""
    };

    const [values, setValues] = useState(variables);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    };

    const Guardar = async ()=>{
        Axios.post("/cita",{
            nombre: values.nombre,
            apellidoPat: values.apellidoPat,
            apellidoMat: values.apellidoMat,
            matricula: values.matricula,
            modeloVeh: values.modeloVeh,
            modAño: values.modAño,
            telefono: values.telefono,
            correo: values.correo,
            fecha: values.fecha
        }).then(()=>{
            console.log("Se guardaron los datos")
        });
        setValues(variables);
    }

    const Enviar = (e) => {
        e.preventDefault();
        Guardar();
    };

    
  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Agendar citas" />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="well well-sm">
              <form class="form-horizontal" method="post" onSubmit={Enviar}>
                <fieldset>
                  <legend class="text-center header"></legend>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-user bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="fname"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        type="text"
                        placeholder="Nombre"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                     
                    </span>
                    <div class="col-md-8">
                      <input
                        id="lname"
                        name="apellidoMat"
                        value={values.apellidoMat}
                        onChange={handleChange}
                        type="text"
                        placeholder="Apellido Materno"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      
                    </span>
                    <div class="col-md-8">
                      <input
                        id="lname"
                        name="apellidoPat"
                        value={values.apellidoPat}
                        onChange={handleChange}
                        type="text"
                        placeholder="Apellido Paterno"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      
                    </span>
                    <div class="col-md-8">
                      <input
                        id="lname"
                        name="matricula"
                        value={values.matricula}
                        onChange={handleChange}
                        type="text"
                        placeholder="Matricula"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      
                    </span>
                    <div class="col-md-8">
                      <input
                        id="lname"
                        name="modeloVeh"
                        value={values.modeloVeh}
                        onChange={handleChange}
                        type="text"
                        placeholder="Modelo de Vehiculo"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      
                    </span>
                    <div class="col-md-8">
                      <input
                        id="lname"
                        name="modAño"
                        value={values.modAño}
                        onChange={handleChange}
                        type="text"
                        placeholder="Año"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-envelope-o bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="email"
                        name="correo"
                        value={values.correo}
                        onChange={handleChange}
                        type="text"
                        placeholder="Correo Electronico"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-phone-square bigicon"></i>
                    </span>
                    <div class="col-md-8">
                      <input
                        id="phone"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleChange}
                        type="text"
                        placeholder="Telefono"
                        class="form-control"
                      />
                    </div>
                  </div>

                 

                  <br/>
                  <div class="form-group">
                    <div class="col-md-12 text-center">
                      <button type="submit" class="btn btn-primary btn-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Citas
