import { useState, useEffect } from 'react';
import './register.css';
import Image from './images/patient(1).png';

const Register=() =>{
    
    const initialValues = {email:"", password:"",cpassword:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit]  = useState(false);

    const handleChange = (e) => {
        // console.log(e.target)
        const { name , value} = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    } ,[formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {}
        
        const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
            

        if (!values.email) {
            errors.email = "Email is required..!";
        } else if (!emailpattern.test(values.email)) {
            errors.email = "Invalid email address..!";

        }
        if (!values.password) {
            errors.password = "Password is required..!";
        } else if (!passpattern.test(values.password)) {
            errors.password = "Please enter atleast 10 character with number, uppercase, lowercase and special character..!";
        }
        if (!values.cpassword) {
            errors.cpassword = "Confirm password is required..!";
        }else if (values.password !== values.cpassword) {
            errors.cpassword = "Password doesn't match..!";
        }
        // <i className='bx bxs-x-circle error-icon'></i>

        return errors
    };

  return (
    <div className="container-fluid">
        
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div><p>successful.......</p></div>):(<pre>{JSON.stringify(formValues, undefined,2)}</pre>)} */}
                
                <form id="log" action="../login/login.html"
                    onSubmit={handleSubmit}>
                    <img className="rounded mx-auto d-block" src={Image} alt="logo" />
                    <h1>Create New Account</h1>
                    <p>Enter your Credentials Below</p>

                    <div className="form-group email-field">
                        <label>Email<i class='bx bxs-star star'></i></label>
                        <input type="email" id='email' autoComplete='off' name='email'
                            className="form-control email" placeholder="Email"
                            value={ formValues.email} 
                            onChange={handleChange} />
                        
                        <p className='verror'>{ formErrors.email } </p>
                        

                        {/* <span className="error email-error">
                            <i className='bx bxs-x-circle error-icon'></i>
                            <p className="error-text">Please enter a valid email address..!</p>
                        </span> */}
                    </div>

                    <div className="form-group create-password">
                        <label for="password">Password <i className='bx bxs-star star'></i></label>
                        <input type="password" name='password' class="form-control password" placeholder="Password"
                            value={ formValues.password}
                            onChange={handleChange}  />
                        <p className='verror'>{ formErrors.password }</p>

                        {/* <span className="error password-error ">
                            <i className='bx bxs-x-circle error-icon'></i>
                            <p className="error-text pass">Please enter atleast 10 character with number, uppercase, lowercase and special character.</p>
                        </span> */}
                    </div>
                    <div className="form-group confirm-password">
                        <label for="password">Confirm Password <i className='bx bxs-star star'></i></label>
                        <input type="password" name='cpassword' className="form-control cpassword" placeholder="Confirm Password" 
                        value={ formValues.cpassword}
                        onChange={handleChange} />

                        <p className='verror'>{ formErrors.cpassword }</p>
                        {/* <span className="error cpassword-error">
                            <i className='bx bxs-x-circle error-icon'></i>
                            <p className="error-text">Password does not match.</p>
                        </span> */}
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                </form>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12"></div>

        </div>
    </div>
  )
}

export default Register;