import React,{useState} from "react";
import "./index.css";





export default function App() {
  const [values,setValues]=useState({
  firstName:"",
  lastName:"",
    email:""
  });
  const [submitted,setSubmitted]=useState(false);
  const [valid,setValid]=useState(false);

  const handleFirstName=(e)=>{
  setValues({...values,firstName:e.target.value})
  }

  const handleLastName=(e)=>{
  setValues({...values,lastName:e.target.value})
  }

  const handleEmail=(e)=>{
  setValues({...values,email:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }
  
  return (
    <div class="form-container">
      <form onSubmit={handleSubmit} class="register-form">
        {submitted && valid ? <div className='success-message'>Success! Thank you for registering</div> : null}
        <input
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstName}
        />
        {submitted && !values.firstName ? <span>Please enter the first name</span> : null}
        <input
          id="last-name"
          class="form-field"
          value={values.lastName}
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastName}
        />
        {submitted && !values.lastName ? <span>Please enter the last name</span> : null}
        <input
          id="email"
          value={values.email}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
        />
        {submitted && !values.email? <span>Please enter the email</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
