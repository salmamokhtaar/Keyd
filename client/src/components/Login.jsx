import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import img from "../assets/banner/35.png"


function Login() {
  const [email , setemail] = useState("")
  const [password , setPassword] = useState("")
  const navigates = useNavigate()

    const {login,signUpWithGmail} = useContext(AuthContext);
    const [error, setError] = useState("");
  
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||"/";

  
  
     const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);
      login(email,password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast("Login Successfully...")
        navigate(from, {replace: true});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    
  
    
     }
  
     // sign up using goole account
     const handleRegister = () =>  {
       signUpWithGmail().then((result)=> {
        const user = result.user;
        enqueueSnackbar("Sign Up Successfully...",{variant: 'success'});
        navigate(from, {replace: true});
      })    
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
     }
    //  my
    const handleLogins = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/loginuser', {
        "email": email,
        "password": password
      }).then((response) => {
        if (response.data.status === false) {
          alert("Email or password is incorrect");
        } else {
          alert("Successfully Login");
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/admin/dashboard");
        }
      }).catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
    }
  


  return (
  
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input value={email} onChange={(e)=> setemail(e.target.value)} 
                    id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                
                </div>
                <div className="relative">
                  <input   value={password} onChange={(e)=> setPassword(e.target.value)} 
                   id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                </div>
                <div>
                 {error ? <p className='text-red-700'>Email or Password is not Correct </p>: ""}
                </div>
                <p>If you haven't an account.Please <Link to={'/signUp'} className='text-blue-700 underline'>Sign up</Link>Here</p>
                <div className="relative">
                  <button onClick={handleLogins}
                  className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
                </div>
              </form>
            </div>
            <hr />
            <div  className='flex w-full items-center flex-col mt-5 gap-3'>
              <button onClick={handleRegister} className='block'> <img src={img} className='w-12 h-12 inline-block' alt="" />login with Google</button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login