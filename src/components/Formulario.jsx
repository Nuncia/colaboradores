import React, { useState } from 'react';

function Formulario({ addColaborador, setMessage, setAlertType }) {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(colaborador).some(field => field === '')) {
      setMessage("Todos los campos son obligatorios.");
      setAlertType("danger");
    } else {
      addColaborador(colaborador);
      
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
      });
      setMessage("Colaborador agregado exitosamente.");
      setAlertType("success");
    }
  };

  return (
    <div className="col-lg-6"> {}
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" name="nombre" placeholder="Nombre" onChange={handleChange} value={colaborador.nombre} />
                <input className="form-control mb-3" name="correo" placeholder="Correo" onChange={handleChange} value={colaborador.correo} />
                <input className="form-control mb-3" name="edad" placeholder="Edad" onChange={handleChange} value={colaborador.edad} />
                <input className="form-control mb-3" name="cargo" placeholder="Cargo" onChange={handleChange} value={colaborador.cargo} />
                <input className="form-control mb-3" name="telefono" placeholder="Teléfono" onChange={handleChange} value={colaborador.telefono} />
                <button type="submit" className="btn btn-primary">Agregar colaborador</button>
            </form>
        </div>
   


  );
}

export default Formulario;
