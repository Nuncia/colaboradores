import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <div className="form-modern">
            <h4 >Buscador</h4>
            <form onSubmit={handleSearch}>
                <input 
                    className="form-control"
                    type="text" 
                    name="name" 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Buscar colaborador..."
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default Buscador;
