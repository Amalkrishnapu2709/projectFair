/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" text-white  shadow">
        <div className="container mt-5 w-100 py-5 text-white">
          <div className="footer-content d-flex justify-content-between">
            <div style={{ width: "400px" }} className="media">
              <h5 className="d-flex text-white"><i className="fa-brands fa-docker me-2"></i>Project Fair</h5>
              <p style={{ textAlign: "justify" }}>
                Designed and built with all the love in the world by the
                Bootstrap team with the help of our contributors.
              </p>
              <span>Code licensed MIT, docs CC BY 3.0</span>
              <span>Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column text-white">
              <h5 style={{ height: "28px", color: "white" }}>Links</h5>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Home</Link>
              <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>Login</Link>
              <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>Register</Link>
            </div>
            <div className="guides d-flex flex-column text-white">
              <h5 style={{ height: "28px", color: "white" }}>Guides</h5>
              <a href="https://react.dev/" target="blank" style={{ textDecoration: "none", color: "white" }}>React JS</a>
              <a href="https://reactrouter.com/en/main" target="blank" style={{ textDecoration: "none", color: "white" }}>
                React Routing
              </a>
              <a href="https://react-bootstrap.netlify.app/" target="blank" style={{ textDecoration: "none", color: "white" }}>
                React Bootstrap
              </a>
            </div>
            <div className="contact">
              <h5 style={{ height: "28px", color: "white" }}>Contact Us</h5>
              <div className="d-flex">
                <input type="text" className="form-control me-1" placeholder="Email Id Please"/>
                <button className="btn btn-warning">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="d-flex justify-content-between mt-2 " style={{ height: "28px" }}>
              <a href="https://react.dev/">
                 <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://react.dev/">
                  <i className="fa-brands fa-github "></i>
                </a>
                <a href="https://react.dev/">
                  <i className="fa-brands fa-twitter "></i>
                </a>
                <a href="https://react.dev/">
                  <i className="fa-brands fa-facebook "></i>
                </a>
                <a href="https://react.dev/">
                  <i className="fa-brands fa-instagram "></i>
                </a>
                <a href="https://react.dev/">
                  <i className="fa-brands fa-linkedin "></i>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: "100px" }}>
            Copyright &copy; 2024 Project Fair. Built with React.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
