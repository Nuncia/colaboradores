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
    console.log(searchTerm);
    
    const filtered = colaboradores.filter(col => 
      (col.nombre.toLowerCase()).includes(searchTerm.toLowerCase()) ||
      (col.cargo.toLowerCase()).includes(searchTerm.toLowerCase()) ||
      col.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.edad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.telefono.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColaboradores(filtered);
  }

  return (
    <div>   
      <div style={{ display: 'block' }}>
        <Buscador onSearch={filterColaboradores} />
        <Listado colaboradores={filteredColaboradores.length > 0 ? filteredColaboradores : colaboradores} />
      </div>
      
    </div>
  );
}

export default App;
