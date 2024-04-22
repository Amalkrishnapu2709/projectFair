/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth'


function Header({insideDashBoard}) {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <Navbar style={{zIndex:'1'}} className="bg-primary   shadow top-0 position-fixed w-100">
    <Container>
      <Navbar.Brand >
      <Link style={{textDecoration:'none'}} className='fw-bolder' to={'/'}><i className="fa-brands fa-docker"></i> Project Fair</Link>
     </Navbar.Brand>
    { insideDashBoard && 
    <div className="ms-auto">
      <button onClick={logout} className='btn btn-link'>Logout <i className="fa-solid fa-arrow-right"></i></button>
     </div>}
    </Container>
  </Navbar>

  )
}

export default Header