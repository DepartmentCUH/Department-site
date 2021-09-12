import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import './Navbar.css';


const NavbarComponent = () => {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:"#636E72"}}>
  <Container className="flex lg:flex-col">
    <div className="flex">
  <Navbar.Brand href="#home"><img src="https://lh3.googleusercontent.com/proxy/5IT37qEeDqfVtiSc7yYdexT7HA_pxucd4RAuqL01Ng9ChBXQSDA3Mepaee6Rqs_kvFOwSXfoPVh-C0WSTw6mkwY" className="h-24 w-24"/></Navbar.Brand>
  {/* </div> */}
  <div className="lg:flex-col text-white font-bold	">
  <div className="text-center hidden lg:flex lg:justify-center">Department of Computer Science and Engineering</div>
  <div className="text-center hidden lg:flex lg:justify-center ">Cental University of Haryana</div>
  <div className="text-center hidden lg:flex lg:justify-center">( Established by Govt. of India under the ‘Central University Act, 2009’ )</div>
 </div>

  </div>
  {/* <div> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav"   />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
      <Nav.Link href="#features" className="text-white mx-16">Home</Nav.Link>
      <NavDropdown className="mx-16" title={
        <span className="text-white ">People</span>
    }  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-16" title={<span className="text-white">Academics</span>}  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-16" title={<span className="text-white">Research</span>}  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-16" title={<span className="text-white">Events</span>} className="text-white" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-16" title={<span className="text-white">Contact us</span>}  id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features" className="text-white mx-16">Login</Nav.Link>
     
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
 {/* </div> */}
  </Container>
</Navbar>
  

                 
        </div>
    );
}

export default NavbarComponent;
