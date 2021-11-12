import React from 'react';
import './login-signup.css';
import { useHistory } from "react-router-dom";
import axios from '../../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image12 from '../../assets/11.jpg';
import {
 
    Link
  } from "react-router-dom";
function Signup() {
    const history = useHistory();
    function signup(e){
        
        e.preventDefault();
       
        let request ={
            
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            
            password:document.getElementById('password').value,
            confirmPassword:document.getElementById('confirmPassword').value
        }
        axios.post('/api/register',request)
        .then(response => {
            // alert(response.data.message)
            // toast.success(response.data.mesage,{
            //     position: "top-center",
                   
            //         autoClose: 2000,
            //         hideProgressBar: true,
            //         NewestonTop:true,
            //         closeOnClick: true,
            //         pauseOnHover: false,
            //         draggable: false,
            //         Progress: undefined,
            // })
            if(response.data.success){
                toast.success(response.data.message,{
                    position: "top-center",
                   
                    autoClose: 2000,
                    hideProgressBar: true,
                    NewestonTop:true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    Progress: undefined,
                })
            localStorage.setItem('jwt',response.data.token)
            window.setTimeout(function(){

                // Move to a new location or you can do something else
                window.location.href = "/";
        
            }, 1000);
           
    }})
    .catch(err => {
        
        toast.error(`${err.response.data.message}`,{
            position: "top-center",
               
            autoClose: 2000,
            hideProgressBar: true,
            NewestonTop:true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            Progress: undefined,
        });
    })}
    return (
        <div class="main">

        
        <section class="signup">
        <ToastContainer />
            <div class="container12">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form  class="register-form" id="register-form" onSubmit={(e)=>signup(e)}>
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Repeat your password"/>
                            </div>
                           
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                            </div>
                            <div className="sign-up-asking">
                        Already have an account ? <Link style={{ textDecoration: 'none' }} to="/login"><span> Login</span></Link>
                        </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={image12} alt="sing up image" /></figure>
                        {
                        // <Link to="/login" style={{ textDecoration: 'none' }}>
                        // <a href="#" className="signup-image-link">Already a  member ?</a>
                        // </Link>
                        }
                    </div>
                </div>
            </div>
        </section>

      
            </div>


    )
}



export default Signup;
