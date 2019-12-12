import React, { Component } from "react";
import logo from "../../../res/img/logo.png";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';





class NavHome extends Component {
    constructor(props) {
        super(props);
        this.user_id = JSON.parse(localStorage.getItem("user_id"));
        this.navRef = null;
        this.state = {
        showModal: false
        };
    }
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
    
        const container = {height: 1300}
        return(
        <div>
            <Router>
            <header>
                <MDBNavbar style={indigo} dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong><img src={logo} alt="Supply'Impact logo" style={{ width: "50px" }}></img></strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#">Pricing</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#">Options</MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavItem right>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBCollapse>
                </MDBNavbar>
            </header>
            </Router>
            
        </div>
        );
    }
    }
export default withRouter(NavHome);
