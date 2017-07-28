import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';

let Timer = createReactClass({
  getInitialState: function() {
    return {
      secElapsed:0
    };
  },
  componentDidMount: function(){
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function(){
    clearInterval(this.interval);
  },
  tick: function(){
    this.setState({
      secElapsed: this.state.secElapsed + 1
    });
  },
  render: function(){
    return (
      <div>
        <p>Detik terlewati {this.state.secElapsed}</p>
      </div>
    )
  }
})

export default Timer;
