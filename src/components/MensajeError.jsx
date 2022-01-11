import React from 'react'

const MensajeError = ({mensajeError}) => {
    return (
        <div className='alert alert-danger' role="alert">
            {mensajeError}
        </div>
    )
}

export default MensajeError
