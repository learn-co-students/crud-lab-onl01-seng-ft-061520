import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('restaruant-input-state-on-submit', this.state)
    this.props.addRestaurant(this.state.text)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' value='Add Restaurant' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
