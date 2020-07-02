import React from 'react';
import {Nav,Navbar,NavItem,NavbarBrand} from 'reactstrap';
import '../css/dashboard.css';
import {Bell,Profile,Search} from '../assets/index';

export const Navbars=()=>{
    return(
        <div style={{display:'flex',justifyContent:'center',alignItem:'center',height:'10vh'}}>
            <div style={{width:'95%'}}>
            <Navbar style={{marginTop:'0.5rem',width:'100%'}}>
                <NavbarBrand className="logo">
                    <div className="icon">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <p className="text-logo">Dashboard</p>
                    </div>
                </NavbarBrand>
                <Nav className="navs-content">
                    <NavItem className="navs-content-items">
                        <input className="nav-textbox" placeholder="Enter product" type="text"/>
                    </NavItem>
                    <NavItem className="navs-content-items">
                        <ul className="nav-list">
                            <li><img width="24px" src={Bell} alt='bell'/></li>
                            <li><img style={{borderRadius:'50%',objectFit:'cover'}} width="40px" height="40px" src={Profile} alt="profile"/></li>
                        </ul>
                    </NavItem>
                </Nav>
        </Navbar>                 
            </div>
        </div>
    )
}