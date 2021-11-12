import React,{useState} from 'react'
import './login-signup.css';
import { useHistory } from "react-router-dom";
import axios from '../../axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import image11 from '../../assets/10.jpg';
import {
 
    Link
  } from "react-router-dom";
  
function Login() {
    const [loaded,setloading]=useState(false);
    const [message,setmessage] =useState(false);
    const history = useHistory();
    const login=(e)=>{
    
        e.preventDefault();
        let request ={
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
        }
        axios.post("/api/login",request)
        .then(resp => {
           
           
            
            if(resp.data.success){
               
                toast.success(resp.data.message,{
                    position: "top-center",
                   
                    autoClose: 2000,
                    hideProgressBar: true,
                    NewestonTop:true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    Progress: undefined,
                })
                
           
                
                localStorage.setItem('jwt',resp.data.token)
                window.setTimeout(function(){

                    // Move to a new location or you can do something else
                    history.push("/students");
            
                }, 1000);
            
               
               
               
              
            }
            
        })
        .catch(error => {
            toast.error(`${error.response.data.message}`,{

                position: "top-center",
               
                autoClose: 2000,
                hideProgressBar: true,
                NewestonTop:true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                Progress: undefined,
            });
        })
    }
    return (
        <div class="main">
        <section class="sign-in">
        <ToastContainer />
        <div class="container12">
            <div class="signin-content">
                <div class="signin-image">
                    <figure><img src={image11} alt="sing up image" /></figure>
                 {
                //      <Link style={{ textDecoration: 'none' }} to="/signup">
                //  <a href="#"  className="signup-image-link" > Create an account
                  
                //     </a>
                //     </Link>
                }
                    
                </div>

                <div class="signin-form">
                    <h2 class="form-title">Login</h2>
                    <form class="register-form" id="login-form" onSubmit={(e)=>login(e)}>
                        <div class="form-group">
                            <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="email" id="email" placeholder="Your Email Address"/>
                        </div>
                        <div class="form-group">
                            <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        
                        <div className="form-group form-button">
                            <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                        </div>
                        <div className="sign-up-asking">
                        Don't Have an account? <Link style={{ textDecoration: 'none' }} to="/signup"><span> Sign Up</span></Link>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>


        </div>
    )
}


export default Login
