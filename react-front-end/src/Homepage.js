import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col,Card,CardImg,ListGroup,ListGroupItem} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/homepage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className= "nav-bar">
        <Navbar expand="lg" variant="light" bg="light">
        <Container style={{backgroundColor: '#444444'}}>
          <NavbarBrand href="#">
           <span style={{ color: '#ffffff' }}>Meal Prep</span>
          </NavbarBrand>

            <Nav className="justify-content-end " variant="info" activeKey="/home">
              <NavItem >
                <NavLink  style={{ color: '#ffffff' }} href="/home">Recipes</NavLink>
            </NavItem>
              <NavItem>
                <NavLink  style={{ color: '#ffffff' }} href="/home">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: '#e33d26' }} href="/home">Login</NavLink>
              </NavItem>
            </Nav>

        </Container>
        </Navbar>
        <Container>
        <Row>
          <Col sm="6">
            <Card body>

               <CardImg  width="100%" src="https://images.unsplash.com/photo-1543352631-6b884eafab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="Card image cap" />

            </Card>
        </Col>
          <Col sm="6">
          <ListGroup className ="list-group">
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check-square" />30 Minitues Recipes</ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check-square" />Meal Plan for upto a week </ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check-square" />Grocery list made for yous</ListGroupItem>
                <ListGroupItem className ="item-group"><FontAwesomeIcon icon="check-square" />Share the plan with your family</ListGroupItem>

              </ListGroup>







           </Col>
        </Row>
         </Container>

      </div>
    );
  }
}
