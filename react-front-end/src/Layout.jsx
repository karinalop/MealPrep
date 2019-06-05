import React, {Component} from 'react';
import {Button, Container, Navbar, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem} from 'reactstrap';
import './styles/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './img/Logo2.png';
import {  getCookie, setCookie } from './Cookie';
import * as cookie from 'react-cookies';




export default class LayoutSignedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let content = <NavLink className = "nav_bar_names" href={'/login'} ><Button id="login" style={{backgroundColor:'red', color: 'white'}}>Login</Button></NavLink>
    if(this.props.authenticated){
      content = (<UncontrolledDropdown setActiveFromChild className="nav_bar_name">
                <DropdownToggle tag="a" className="nav-link" caret>  <FontAwesomeIcon icon="bars" href=''/> Menu </DropdownToggle>
                <DropdownMenu>
                <DropdownItem tag="a" href="/home" active>Home</DropdownItem>
                <DropdownItem tag="a" href="/mealplan/new" active>New Meal Plan</DropdownItem>
                <DropdownItem tag="a" href="/mealplans" active>Previous Meal Plans</DropdownItem>
                <DropdownItem tag="a" href="/login" active>Edit User</DropdownItem>
                <DropdownItem tag="a" href="/" style={{color:'#e33d26'}} onClick={this.props.logout} active>Logout</DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>);
    }


    return (
     <div>
          <Navbar expand="lg" variant="light" className ="nav_bar" >
          <Container>

            <NavbarBrand href="/">
             <img src={logo} style={{ height: 80 }} alt ="logo"/ >

            </NavbarBrand>

              <Nav className="justify-content-end " variant="info" >
                <NavItem >
                  <NavLink className ="nav_bar_name"  href={'/'}>Recipes</NavLink>
              </NavItem>
                <NavItem>
                  <NavLink  className ="nav_bar_name" href={'/'}>About</NavLink>
                </NavItem>
                <NavItem>
                {content}




                </NavItem>


              </Nav>

          </Container>
          </Navbar>

           </div>
    );
  }
}