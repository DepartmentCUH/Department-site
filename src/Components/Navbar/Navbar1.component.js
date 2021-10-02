import React from 'react';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Navbar1 = () => {
    return (
       <div style={{backgroundColor:"#636E72"}}>
            <div className="hidden lg:flex" >
            <div className="ml-16 mr-16 2xl:mx-36">
                <img src={logo2} />
            </div>
            <div className=" md:flex md:flex-col text-white  lg:justify-center  ">
            
  <div className="text-center hidden lg:flex lg:justify-center text-3xl font-bold uppercase">Department of Computer Science and Engineering</div>
  <div className="text-center hidden lg:flex lg:justify-center text-xl uppercase ">Central University of Haryana</div>
  <div className="text-center hidden lg:flex lg:justify-center text-xl ">( Established by Govt. of India under the ‘Central University Act, 2009’ )</div>
 </div>
 

           
            
            </div>
            <div>
            <Navbar collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:"#636E72"}}>
  <Container >
    {/* <div className="flex"> */}
  <Navbar.Brand href="#home" className="lg:hidden"><img src={logo2} style={{width:"50%"}}/></Navbar.Brand>
  
  {/* </div> */}
  {/* <div className="lg:flex-col text-white font-bold	">
  <div className="text-center hidden lg:flex lg:justify-center">Department of Computer Science and Engineering</div>
  <div className="text-center hidden lg:flex lg:justify-center ">Cental University of Haryana</div>
  <div className="text-center hidden lg:flex lg:justify-center">( Established by Govt. of India under the ‘Central University Act, 2009’ )</div>
 </div> */}

  {/* </div> */}
  {/* <div> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav"   />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto" >
      <Nav.Link href="#features" className="text-white mx-8 ">Home</Nav.Link>
      <NavDropdown className="mx-8" title={
        <span className="text-white ">People</span>
    }  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-8" title={<span className="text-white">Academics</span>}  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-8" title={<span className="text-white">Research</span>}  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-8" title={<span className="text-white">Events</span>}  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="mx-8" title={<span className="text-white">Contact us</span>}  id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features" className="text-white mx-8 ">Login</Nav.Link>
     
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
            </div>
       
    );
}

export default Navbar1;
