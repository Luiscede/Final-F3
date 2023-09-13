import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params= useParams()
  
  const [dentista, setDentista] = useState({});
  

  const urlDentistXId='https://jsonplaceholder.typicode.com/users/' + params.id;
  const fetchDentist = () => {
        axios (urlDentistXId)
        .then(res => {
        setDentista(res.data)
        console.log(res.data)
  })
  .catch(err => console.log(err))
}
useEffect(fetchDentist, [urlDentistXId])


  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'aqua'}}>
    
      <h1>Specialist Details</h1>
      <div>
      <img  src='/images/docImg.jpg' alt='er doc' width={'200px'} />
      </div>
      
      <h3>Nombre Especialista : {dentista.name}</h3>
      <h3>Email de contacto💌: {dentista.email}</h3>
      <h3>Telefono 📱{dentista.phone}</h3>
    </div>
  )
}

export default Detail