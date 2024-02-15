import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider';
import {useNavigate, useLocation, Link} from 'react-router-dom'
const title = "Login";
const socialTitle = "Login with Social Media"
const btnText = "Login Now"
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];
export default function Login() {
    const [errorMessage, setErrorMessage] = useState("")
    const {signupWithGmail, login} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
       /*  console.log(form) */
        const email = form.email.value;
        const password = form.password.value;
        /* console.log(email,password) */
        login(email, password).then((res) => {
            const user = res.user;
            alert("Login successfull!")
            navigate(from, {replace: true})
        }).catch ((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email and password")
        })
    }

    const handleRegister = () => {
        signupWithGmail().then((res) => {
            const user = res.user;
            navigate(from, {replace:true})
        }).catch ((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email and password")
        })
    }

    return (
    <div className='login-section padding-tb section-bg'>
        <div className="container">
            <div className="account-wrapper">
                <h3 className='title'>{title}</h3>
                <form className='account-form' onSubmit={handleLogin}>
                    <div className='form-group'>
                        <input type="email" name='email' id='email' placeholder='Email Adress *' required />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' id='password' placeholder='Password *' required />
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
                        <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                            <div className='checkgroup'>
                                <input type="checkbox" name='remember' id='remember'/>
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <Link to="/forgetpass">¿Forget Password?</Link>
                        </div>
                    </div>
                    <div className='form-group'>
                        <button className='d-block lab-btn' type='submit'>
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>

                {/* account bottom */}
                <div className='account-bottom'>
                    <span className='d-block cate pt-10'>¿Do not have an account? <Link to="/sign-up">Sign Up</Link></span>
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
