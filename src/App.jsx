import React, { useState } from 'react';
import './App.css';
import Listado from './components/Listado';
import { BaseColaboradores } from './data/BaseColaboradores.js';

function App() {
  // Usamos el estado local para manejar la lista de colaboradores
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  return (
    <div>   
      <div style={{ display: 'block' }}>
        
        <Listado colaboradores={colaboradores} />
      </div>
      
    </div>
  );
}

export default App;
