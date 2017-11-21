
import './App.css';

import React, { Component } from 'react';

import FoodList from './FoodList'
import AddFoodForm from './AddFoodForm'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      food: [
      {
        type: 'Pizza',
        exp: '2/15/2017'
      },
      {
        type: 'Chicken Pad Thai',
        exp: '2/26/2017'
      },
      {
        type: 'Lemon Cake',
        exp: '2/13/2017'
      }
  ],
      tempFood:{type:"",exp:""}
    }
  }

  submit = (event) => {

    
    this.setState(currentState =>(
      {food: [...currentState.food, this.state.tempFood], tempFood:{type:"",exp:""}}),
      () => console.log(`this is the new state: ${JSON.stringify(this.state.tempFood)}`)
    )

  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name; 
    const value = name === "exp" ? new Date(target.value).toISOString().split('T')[0]: target.value;

    this.setState(currentState => (
      {tempFood: {...currentState.tempFood, [name]:value}}),
      () => console.log(`This is tempFood: ${JSON.stringify(this.state.tempFood)}`)
    )
  }

  removeFood = (event) => {
    let value = event.target.id;
    console.log(`this is the value ${value}`)
    let newState = this.state.food.filter((item) =>  item.type !== value)


    this.setState(currentState => (
      {food: newState}),
      () => console.log(`This is this removedState: ${JSON.stringify(this.state.food)}`)
    )

  }

  render() {

    return(

      <div>
        <FoodList handleDelete={this.removeFood} foodList={this.state.food} />
        <AddFoodForm foodValues={this.state.tempFood} addItem={this.submit} handleChange={this.handleChange}/>

      </div>
    )
  }
}
