import React from "react";
import './index.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      alert("Login Successful");
      
    },
    validate: values => {
      let errors = {};
      let validEmailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!values.emailField) errors.emailField = 'Field Required';
      if (!values.emailField.match(validEmailReg)) errors.emailField = 'Username should be an email';
      if (!values.pswField) errors.pswField = 'Field Required';
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.emailField ? <div id='emailError' style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.pswField ? <div id='pswError' style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
