import React,{Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component{

    render(){
  return (
       <Navbar bg="primary" variant="dark" expand="lg" className='rounded'>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-4 text-white" to="/">
                    <div className='test'>Home</div>
                </NavLink>
                <NavLink className="d-inline p-4 text-white" to="/department">
                    <div className='test'>Department</div>
                </NavLink>
                <NavLink className="d-inline p-4 text-white" to="/employee">
                    <div className='test'>Employee</div>
                </NavLink>

                </Nav>
                </Navbar.Collapse>
        </Navbar>
  )
}
}
