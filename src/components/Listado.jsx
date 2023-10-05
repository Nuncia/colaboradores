import PropTypes from 'prop-types'

const Listado = ({colaboradores}) => {
    
  return (
    <>
        <div className='contenedor_lista'>
            <table className="table table-hover table-modern table-sm tablaColaboradores mb-0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                {colaboradores.map((colaborador) => 
                    <tr key={colaborador.id}>
                        <th scope="row">{colaborador.id}</th>
                        <td scope="row">{colaborador.nombre}</td>
                        <td scope="row">{colaborador.correo}</td>
                        <td scope="row">{colaborador.edad}</td>
                        <td scope="row">{colaborador.cargo}</td>
                        <td scope="row">{colaborador.telefono}</td>
                     </tr>
                     )}
                </tbody>                   
            </table>
        </div>
    </>
  )
};

Listado.propTypes = {
    colaboradores: PropTypes.array
};

export default Listado