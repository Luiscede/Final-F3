import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/Utils/GlobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { theme} = useContextGlobal();


  
  return (
    <div className={`fatherForm ${theme === 'light' ? 'light' : 'dark'}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact