import React, { useState } from 'react';
import './App.css';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './data/BaseColaboradores.js';

function App() {
  // Usamos el estado local para manejar la lista de colaboradores
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);

  const filterColaboradores = (searchTerm) => {
    
    const filtered = colaboradores.filter(colaborador => 
      colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(filtered.length > 0){
      setFilteredColaboradores(filtered);
    } else{
        const emptyCol = {
          nombre: '',
          correo: 'No hay datos',
          edad: '',
          telefono: ''
        }
        filtered.push(emptyCol);
        setFilteredColaboradores(filtered);
    }
    
  }

  return (
    <div>   
      <div className='container'>
        <Buscador onSearch={filterColaboradores} />
        <Listado colaboradores={filteredColaboradores.length > 0 ? filteredColaboradores : colaboradores} />
      </div>
      
    </div>
  );
}

export default App;
