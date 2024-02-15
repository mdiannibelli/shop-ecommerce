import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';
import {useNavigate, useLocation, Link} from 'react-router-dom'

const title = "Register";
const socialTitle = "Login with Social Media"
const btnText = "Signup Now"
export default function Signup() {
    const [errorMessage, setErrorMessage] = useState("")
    const {signupWithGmail, createUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
        signupWithGmail().then((res) => {
            const user = res.user;
            navigate(from, {replace:true})
        }).catch ((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email and password")
        })
    }

const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
   /*  console.log(form) */
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    /* console.log(email,password, confirmPassword) */
    if(password !== confirmPassword){
        setErrorMessage("Password doesn't match! Please provide a correct password")
    } else {
        setErrorMessage("");
        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Account has been created successfully!")
            navigate(from, {freplace:true})
        }).catch((error) => {
            console.log(error.message)
            alert(`${error.message}`)
        })
    }
}

  return (
    <div className='login-section padding-tb section-bg'>
        <div className="container">
            <div className="account-wrapper">
                <h3 className='title'>{title}</h3>
                <form className='account-form' onSubmit={handleSignup}>
                    <div className='form-group'>
                        <input type="text" name='name' id='name' placeholder='Full Name' required />
                    </div>
                    <div className='form-group'>
                        <input type="email" name='email' id='email' placeholder='Email Adress *' required />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' id='password' placeholder='Password *' required />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required />
                    </div>
                    
                    {/* showwing meesage */}
                    <div>
                        {
                            errorMessage && (
                                <div className='error-message text-danger mb-1'>
                                    {errorMessage}
                                </div>
                            )
                        }
                    </div>


                    <div className='form-group'>
                        <button className='d-block lab-btn' type='submit'>
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>

                {/* account bottom */}
                <div className='account-bottom'>
                    <span className='d-block cate pt-10'>¿Do you have an Account? <Link to="/login">Login</Link></span>
                    <span className='or'><span>or</span></span>

                    {/* social login */}
                    <h5 className='subtitle'>{socialTitle}</h5>
                    <ul className='lab-ul social-icons justify-content-center'>
                        <li>
                            <button href='/' className='github' onClick={handleRegister}><i className='icofont-github m-2'></i></button>
                        </li>
                        <li>
                            <a href='/login' className='facebook'><i className='icofont-facebook m-2'></i></a>
                        </li>
                        <li>
                            <a href='/login' className='twitter'><i className='icofont-twitter m-2'></i></a>
                        </li>
                        <li>
                            <a href='/login' className='linkedin'><i className='icofont-linkedin m-2'></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
