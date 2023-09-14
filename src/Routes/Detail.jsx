import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardDetails from '../Components/CardDetails'

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
    <div className='detailbox'>

    <h1>Specialist Details</h1>
    <div  className='detail' >
    
      
  
      <CardDetails dentista={dentista}/>

    </div>
    </div>
  )
}

export default Detail