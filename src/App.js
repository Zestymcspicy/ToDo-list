import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TheList from './components/TheList.js'
import TaskAddBar from './components/TaskAddBar.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemsList : [
        // {
        // name : "get crunk",
        // status : "todo"},
        // {
        // name : "get uncrunk",
        // status: "todo"},
        // {
        // name : "go sleep",
        // status: "done"
        // }
      ],
      newItem : "",
    }
    // this.addNewItem = this.addNewItem.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  //item adding function
 addNewItem = e => {
   e.preventDefault ()
   console.log(e.target.value)
   if (this.state.newItem !== "") {
     const newItem = {name: this.state.newItem, status:"todo", key: Date.now()}
     console.log(newItem);
     const itemsList = [...this.state.itemsList, newItem];
     document.getElementById('inputField').reset();
     this.setState({
       newItem: "",
       itemsList: itemsList,
       })
     }
   }

   handleInput = e => {
     const itemName = e.target.value;
       this.setState({newItem: itemName})
   }

   // checkPress = e => {
   //   console.log(e);
    // if (e.target.value == "Enter") {
    //   this.addNewItem;
    // }
   // }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic To-do list!</h1>
          <TaskAddBar
          addNewItem = {this.addNewItem}
          handleInput = {this.handleInput}
          checkPress = {this.checkPress}
          inputField = {this.inputField}
          />
        </header>
        <TheList
        inputElement={this.inputElement}
        itemsList = {this.state.itemsList}
         />
      </div>
    );
  }
}

export default App;
