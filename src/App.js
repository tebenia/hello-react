import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';
import $ from 'jquery';

let ItemDisplay = createReactClass({
  render() {
    const item = this.props.data;
    return (
      <div className="dashedBox">
        <strong>{item.name}</strong>
        <br/>
        {item.phone}
        <p>{item.company.name}<br/><small>"{item.company.catchPhrase}"</small></p>
        <p>Alamat: {item.address.suite}, {item.address.street}, {item.address.city}</p>
      </div>
    );
  }
})

let App  = createReactClass({
  getInitialState: function() {
    return {
      data:[]
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      datatype: "json",
      cache: false,
      success: function (data){
        this.setState({
          data:data
        });
      }.bind(this)
    })
  },
  render: function() {
    let items = this.state.data.map(function(item, index){
      return (
        <ItemDisplay key={index} data={item}/>
      )
    });
    return (
      <div>
        {items.length > 0 ? "" : "loading..."}
        {items}
      </div>
    );
  }
})

export default App;
