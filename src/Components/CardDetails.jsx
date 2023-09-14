import React from 'react'

const CardDetails = ({dentista}) => {


  return (
    <div className='cardDetail'>    
        
        <img  src='/images/docImg.jpg' alt='er doc' width={'200px'} />
        
        <h3>Nombre Especialista : {dentista.name}</h3>
        <h3>Email de contacto💌: {dentista.email}</h3>
        <h3>Telefono 📱{dentista.phone}</h3>
    </div>
  )
}

export default CardDetails