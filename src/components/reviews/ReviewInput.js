import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
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
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleSubmit} >
          <input name='text' onChange={this.handleChange} value={this.state.text} />
          <input type='submit' value='Add Review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
