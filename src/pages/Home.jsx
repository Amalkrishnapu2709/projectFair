/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LandingImage from "../assets/landing.png";
import ProjectCard from "../components/ProjectCard";
import { Link,useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from "../services/allAPI";

function Home() {
  const [homeProjects,setHomeProjects] = useState([])
  const navigate  = useNavigate()
const [loginStatus,setLoginStatus] = useState("false")
console.log(homeProjects);
  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }  
  },[])
  
  const handleProjects = ()=>{
      if(loginStatus){
          navigate('/projects')
      }else{
        toast.warning("please login to get full access to our projects")
      }
  } 

  const getHomeProjects = async ()=>{
    try{
      const result = await getHomeProjectsAPI()
      console.log(result);
      if(result.status==200){
        setHomeProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      {/* landing */}
      <div
        style={{ minHeight: "100vh" }}
        className="w-100 d-flex justify-content-center
       align-items-center rounded  shadow"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}>
                <i className="fa-brands fa-docker"></i> Project Fair
              </h1>
              <p style={{ textAlign: "justify" }}>
                One Stop destination for all software development projects.
                Where user can add and manage their projects. As well as access
                all projects available in our website.What are you waiting for!!
              </p>
              { loginStatus ?
               <Link to={"/dashboard"} className="btn btn-warning">
                Manage your projects <i className="fa-solid fa-arrow-right"></i>
               </Link>:
                <Link to={"/login"} className="btn btn-warning">
                Start To Explore <i className="fa-solid fa-arrow-right"></i>
              </Link>}
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={LandingImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="text-center mt-5 ">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {
            homeProjects?.length>0 &&
              homeProjects?.map(project=>(
                <div key={project} className="me-5">
                  <ProjectCard displayData={project} />
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProjects} className="btn btn-link mt-3">Click Here to View More Projects....</button>
      </div>
      {/* testimony */}
      <div className="d-flex justify-content-center align-items-center mb-5 flex-column mt-2">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: "18rem" }}>
           
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column" >
               <img height={'60px'} width={'60px'}  className='rounded-circle img-fluid ' src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
               <span> Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, architecto! Ducimus, sequi. Sapiente dicta, corporis,
                    deleniti.
                  </p>
               
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
           
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column" >
               <img height={'60px'} width={'60px'}  className='rounded-circle img-fluid ' src="https://cdn-icons-png.flaticon.com/256/10041/10041755.png" alt="" />
               <span> Alice Mark</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star "></i>
                </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, architecto! Ducimus, sequi. Sapiente dicta, corporis,
                    deleniti.
                  </p>
               
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
           
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column" >
               <img height={'60px'} width={'60px'}  className='rounded-circle img-fluid ' src="https://cdn-icons-png.flaticon.com/512/4323/4323015.png" alt="" />
               <span> Luke Damian</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, architecto! Ducimus, sequi. Sapiente dicta, corporis,
                    deleniti.
                  </p>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  );
}

export default Home;
