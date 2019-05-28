import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import {Button,Form, FormGroup, Label, Input,Col,Container,Row } from 'reactstrap';
import axios from "axios";


import meal from './img/Meal.jpg';

import './styles/homepage.css';
import Layout from './Layout.jsx';




class MealSettings extends Component {

  constructor() {
        super();
        this.state = {
          days: '3',
          servings: '2',
          diet: 'Traditional',
          allergies: []
        };
      }



//Saves data from the form on submit and sends it to the backend
  onSubmit = (e) => {
        e.preventDefault();
        const { days, servings, diet, allergies} = this.state;
        axios.post('/api/meal_plans', { days, servings, diet, allergies})
          .then((result) => {
            const id = result.data.mealplan.id
            console.log(result.data.mealplan.id)
            this.props.history.push(`/mealplan/${id}`);
          });
        console.log(this.state);
      }

//Saves data from the select form fields
  onChange =(e) => {
    let index;
    this.setState({ [e.target.name]: e.target.value });
  }

//Saves data from the cehckbox part of form
  onAllergiesChange =(e) => {
    let index;
    if (e.target.checked) {
      this.state.allergies.push(e.target.value)
      } else { //removes unchecked data from the array
        index = this.state.allergies.indexOf(e.target.value)
        this.state.allergies.splice(index, 1)
      }

      // console.log(this.state);
  }

  render() {
    const { days, servings, diet, allergies} = this.state;

    return (
      <div>
      <Layout />
        <Container>
          <Row>
            <Col xs="6">
              <img className="home_image" width="100%" src={meal} style={{ height: 400 }} alt ="home image"/ >

            </Col>

            <Col xs="6" style={{marginTop:50}} className="meal-form">
             <Label className="meal-plan">Fill-in the details below to create your meal plan</Label>
            <Form onSubmit={this.onSubmit}>
         <FormGroup row >
          <Label for="select" md={4} className="meal-plans">Number of days</Label>
          <Col md={{ span: 4, offset: 2 }}>
          <Input type="select" name="days" value={days} onChange={this.onChange} >
            <option>3 </option>
            <option>5 </option>
          </Input>
          </Col>
        </FormGroup>
         <FormGroup row >
          <Label for="select" md={4} className="meal-plans">Number of servings</Label>
          <Col md={{ span: 4, offset: 2 }}>
          <Input type="select" name="servings" value={servings} onChange={this.onChange}>
            <option>2 </option>
            <option>4 </option>
          </Input>
          </Col>
        </FormGroup>


        <FormGroup row >
          <Label for="selectMulti" md={4} className="meal-plans">Select Diet Type</Label>
          <Col md={{ span: 4, offset: 2 }}>
          <Input type="select" name="diet" value={diet} onChange={this.onChange}>
            <option>Traditional</option>
            <option>Keto</option>
            <option>Pescaterian</option>
            <option>Vegetarian</option>
            <option>Paleo</option>

          </Input>
          </Col>
        </FormGroup>
        <p className="meals-plans">Select Allergies</p>
        <FormGroup check name='allergies'inline>

          <p><Label check name='dairy'  style={{ paddingRight: 4 }}>
            <Input type="checkbox" value='dairy-free' onChange={this.onAllergiesChange} />{' '}
            Dairy
          </Label></p>
          <p><Label check name='nuts' style={{ paddingRight: 4 }}>
            <Input type="checkbox" value='tree-nut-free' onChange={this.onAllergiesChange} />{' '}
            Nuts
          </Label></p>
          <p><Label check name='gluten' style={{ paddingRight: 4 }}>
            <Input type="checkbox" value='gluten-free' onChange={this.onAllergiesChange} />{' '}
            Gluten
          </Label>
          </p>
           <p><Label check name='eggs' style={{ paddingRight: 4 }}>
            <Input type="checkbox" value='egg-free' onChange={this.onAllergiesChange} />{' '}
            Eggs
          </Label>
          </p>
          <p><Label check name='fish' style={{ paddingRight: 4 }}>
            <Input type="checkbox" value='fish-free' onChange={this.onAllergiesChange} />{' '}
            Fish
          </Label>
          </p>
           <p><Label check name='wheat' style={{ paddingRight: 4 }}>
            <Input type="checkbox" value='wheat-free' onChange={this.onAllergiesChange}/>{' '}
            Wheat
          </Label>
          </p>
          </FormGroup>

          <Button variant="primary" type="submit" name="meal-plan" size="lg" color="success">
            Create Meal Plan
          </Button>
           </Form>
            </Col>

          </Row>
          </Container>



      </div>


      )
  }
}


export default withRouter(MealSettings)