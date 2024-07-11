import './LoginPage.css';

import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Login() {
    return (
        <>
            <form>
                <div className="login-form">
                    <div className='login-form__column'>
                        <a href="" className="login-form__fb-btn"><FaFacebookSquare /> Login With Facebook</a>
                        <a href="" className="login-form__x-btn"><FaXTwitter /> Login With X</a>
                        <a href="" className="login-form__google-btn"><FcGoogle /> Login With Google</a>
                        <a href="/sign-up" className='login-form__sign-up' 
                        >New Member? Sign Up</a>
                    </div>

                    <div className="login-form__column login-form__vl">
                        <span className="login-form__vl-inner-text">Or</span>
                    </div>

                    <div className="login-form__column">
                        <input type="text" placeholder="User Name" required></input>
                        <input type="password" name="password" placeholder="Password" required></input>
                        <button type="submit" value="Login" className='login-form__login-btn'>Login</button>
                        <a href="" className='login-form__forgot-password'>Forgot password?</a>
                    </div>

                </div>
            </form>
        </>
    );
}
export default Login;