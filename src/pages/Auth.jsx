/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimage from "../assets/login.png.jpeg";
import { FloatingLabel, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from "../services/allAPI";
import { tokenAuthContext } from "../contexts/TokenAuth";
// eslint-disable-next-line react/prop-types
function Auth({ insideRegister }) {

  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const naviage = useNavigate()
  const [userInputs,setUserInputs] = useState({
    username:"",email:"",password:""
  })

  console.log(userInputs)

  const handleRegister = async (e) =>{
    e.preventDefault()
    if(userInputs.username && userInputs.email && userInputs.password){
      //api call
      try{
        const result = await registerAPI(userInputs)
        console.log(result);
        if(result.status==200){
          toast.success(`Welcome ${result.data.username}... Please Login to explore our website!!!`)
          setUserInputs({username:"",email:"",password:""})
          setTimeout(()=>{
            naviage('/login')
          },2000)
        }else{
          toast.error(result.response.data)
          setTimeout(()=>{
            setUserInputs({username:"",email:"",password:""})
          },2000);
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning("please fill the form Completely")
    }
  }
  
  const handleLogin = async (e) =>{
    e.preventDefault()
    if( userInputs.email && userInputs.password){
      //api call
      try{
        const result = await loginAPI(userInputs)

        if(result.status==200){
          //store existingUser and token
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
          setIsAuthorised(true)
          toast.success(`Welcome ${result.data.existingUser.username}...`)
          setUserInputs({username:"",email:"",password:""})
          setTimeout(()=>{
            naviage('/')
          },2000)
        }else{
          toast.error(result.response.data)
          
        }
      }
      catch(err){
        console.log(err);
      }
    }else{
      toast.warning("please fill the form Completely!!!")
    }
  }
  return (
    <>
      <div
        style={{ height: "100vh", width: "100%" }}
        className="d-flex justify-content-
      center align-items-center"
      >
        <div className="container w-75">
          <Link
            style={{ textDecoration: "none" }}
            to={"/"}
            className="fw-bolder"
          >
            <i className="fa-solid fa-arrow-left"></i>Back to Home
          </Link>
          <div className="card shadow p-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className="w-100" src={loginimage} alt="Auth" />
              </div>
              <div className="col-lg-6">
                <h1 className="fw-bolder ">
                  <i className="fa-brands fa-docker"></i> Project Fair
                </h1>
                <h5 className="fw-bolder mt-2">
                  Sign {insideRegister ? "up" : "in"} to your Account
                </h5>
                <form>
                  {
                    insideRegister &&
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="Username" />
                  </FloatingLabel>
                  }
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} type="password" placeholder="Password" />
                  </FloatingLabel>

                  {
                    insideRegister?
                    <div className="mt-3">
                      <button onClick={handleRegister} className="btn btn-primary">Register</button>
                      <p className="mt-2">Already have an Account?Click here to <Link className="text-info" to={'/login'}>Login
                      </Link></p>
                    </div>
                     : 
                     <div className="mt-3">
                      <button onClick={handleLogin} className="btn btn-primary">Login</button>
                      <p className="mt-2">New User?Click here to <Link className="text-info" to={'/register'}>Register</Link></p>
                    </div>
                  }



                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
}

export default Auth;
