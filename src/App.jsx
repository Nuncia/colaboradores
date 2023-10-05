import React, { useState } from 'react';
import './App.css';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import { BaseColaboradores } from './data/BaseColaboradores.js';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const filterColaboradores = (searchTerm) => {
    const filtered = colaboradores.filter(col => 
      col.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.edad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.telefono.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(filtered.length > 0){
      setFilteredColaboradores(filtered);
    } else{
        const emptyCol = {
          nombre: '',
          correo: 'No hay colaboradores para esta busqueda.',
          edad: '',
          telefono: ''
        }
        filtered.push(emptyCol);
        setFilteredColaboradores(filtered);
    }
    
  }

  const addColaborador = (newColaborador) => {
    if (newColaborador) {
      setColaboradores([...colaboradores, newColaborador]);
      setAlertMessage('Colaborador añadido exitosamente');
      setAlertType('success');
    } else {
      setAlertMessage('Todos los campos son obligatorios');
      setAlertType('danger');
    }
  };

  return (
<div className="container mt-5">
    <div className="row">  {}
        <div className="col-md-6 list_container">  {}
            <div className="list-container">
                <h2>Lista de colaboradores</h2>
                <Buscador onSearch={filterColaboradores} />
                <Listado colaboradores={filteredColaboradores.length > 0 ? filteredColaboradores : colaboradores} />
            </div>
        </div>
        <div className="col-md-6">  {}
            <div className="form-container ml-5">
                <div style={{textAlign: 'left'}}> <h3>Agregar colaborador</h3> </div>
                <Formulario addColaborador={addColaborador} setMessage={setAlertMessage} setAlertType={setAlertType} />
                <Alert message={alertMessage} type={alertType} />
            </div>
        </div>
    </div>
</div>

  );
}

export default App;
