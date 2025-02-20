import React from 'react'
import PropTypes from 'prop-types'

const MiComponente = ({ nombre, edad, esProfesor }) => {
    console.log("Este es el prop de mi componente", nombre, edad, esProfesor);

    return (
        <div>
            <ul>
                <li>Mi nombre es: {nombre}</li>
                <li>Edad: {edad}</li>
                <li>Es profesor? {esProfesor}</li>
            </ul>
        </div>
    )
};

MiComponente.propTypes = {
    info: PropTypes.object,

}



export default MiComponente;