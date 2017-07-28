import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';

let Counter = createReactClass({
  getInitialState: function() {
    return {
      count:0
    };
  },
  handleClick: function(){
    this.setState({
      count:this.state.count + 1
    });
  },
  render: function(){
    return (
      <div>
        <button onClick={this.handleClick}>+1</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
})

export default Counter;
