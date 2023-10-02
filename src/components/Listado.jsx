// import { BaseColaboradores } from "./BaseColaboradores";
import PropTypes from 'prop-types'

const Listado = ({colaboradores}) => {
    
 
  return (
    <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <table id='mini' className="table table-striped  table-hover  ">
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
    colaboradores: PropTypes.string
};

export default Listado