import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <div className="form-modern mt-6">
            <form onSubmit={handleSearch} className='formaBuscador'>
                <input 
                    className="form-control"
                    type="text" 
                    name="name" 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Buscar colaborador..."
                />
                <button type="submit" className='btn btn-primary' style={{}}>Buscar</button>
            </form>
        </div>
    );
};

export default Buscador;