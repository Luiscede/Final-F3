
import { useState } from 'react';
import React from "react";


const Form = () => {
  
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const[user,setUser]= useState({
    name:'',
    lastName:'',
    email:'',
    message:''
  })
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length > 5 && 
      (user.email.includes('@') && user.email.includes('.com'))
      ){
        setShow(true)
        setError(false)
        event.target.reset()
        console.log(user)
        
    } else {
        setError(true)
        setShow(false)
    }
}


  return (
    <div className='formStyle'>
      <form onSubmit={handleSubmit}>
      <label >Name</label>
        <input type="text" placeholder='Must be at least 5 characters' onChange={(event) => setUser({...user, name: event.target.value})}/>
      <label >Last Name</label>
        <input type="text"  onChange={(event) => setUser({...user, lastName: event.target.value})}/>
      <label >Email</label>
        <input type="email" placeholder='example: "user@user.com"' onChange={(event) => setUser({...user, email: event.target.value})}/>
      <label ></label>
      <textarea placeholder='Do you wanna tell us something about you? 🥰' onChange={(event) => setUser({...user, message: event.target.value})} style={{ resize: "none", height: "100px", backgroundColor: "#fadcdf", opacity:'50%', borderRadius:'5%'}} />
      <button>Send</button>
      
        {error && <div><h4>Please verify your information</h4></div>}

        

        {show ? <>
            <div>
            <h4>Thank you, {user.name}💓</h4>
            <h5>We'll contact you as soon as possible by email!😎</h5>
            </div>
        </>
        : null
        }

      </form>
      
    </div>
    
  );
};

export default Form;
