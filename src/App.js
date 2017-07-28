import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';

let ColorDisplay = createReactClass({
  render: function() {
    const displayStyle = {backgroundColor: "#"+ this.props.bgCol};
    return (
      <h1 style={displayStyle}>Ganti warna latar</h1>
    );
  }
})

let PresetButton = createReactClass({
  handleClick: function(event){
    this.props.onColorSelected(this.props.preset);
  },
  render: function() {
    const displayStyle = {backgroundColor: "#" + this.props.preset};
    return (
      <button onClick={this.handleClick}><i style={displayStyle}></i> {this.props.preset}</button>
    );
  }
})

let TextInput = createReactClass({
  handleTextInput: function(event){
    this.props.onColorSelected(event.target.value);
  },
  render: function() {
    return (
      <input type="text" onChange={this.handleTextInput} value={this.props.currentColor}/>
    );
  }
})

let App = createReactClass({
  getInitialState: function() {
    return {
      color:"ccc"
    };
  },
  handleColorSection: function(selectedColor){
    this.setState({
      color:selectedColor
    });
  },
  render: function(){
    return (
      <div>
        <ColorDisplay bgCol={this.state.color}/>
        <PresetButton preset="c00" onColorSelected={this.handleColorSection}/>
        <PresetButton preset="0c0" onColorSelected={this.handleColorSection}/>
        <PresetButton preset="00c" onColorSelected={this.handleColorSection}/>
        <TextInput onColorSelected={this.handleColorSection} currentColor={this.state.color}/>
      </div>
    )
  }
})

export default App;
