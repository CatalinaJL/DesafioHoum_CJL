import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import {Nav, Form, FormControl, Button } from 'react-bootstrap';
import './styles/navbar.css';
import GhibliIcon from '../Assets/anime.svg';

const NavbarApp = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="ligth" variant="light">
            <Navbar.Brand href="#home"><img className="navbarIcon" src={GhibliIcon} alt="Icono Ghibli"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                 <Nav.Link href="#peliculas">Películas</Nav.Link>
    </Nav>
   
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
};

export default NavbarApp;