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
        {
        name : "get crunk",
        status : "todo"},
        {
        name : "get uncrunk",
        status: "todo"},
        {
        name : "go sleep",
        status: "done"
        }
      ],
      newItem : {},
      query: "What you need do?"
    }
    this.addNewItem = this.addNewItem.bind(this)
    // this.returnToToDo = this.returnToToDo.bind(this)
  }

  //item adding function
 addNewItem = e => {
   e.preventDefault ()
     const itemsList = this.state.itemsList.concat(
       this.state.newItem
     );
     this.setState({
     newItem : {},
     itemsList: itemsList,
     })
   }

  handleInput = e => {
    const itemName = e.target.value;
    const newItem = {name: itemName, key: Date.now()}
    this.setState({newItem,})
  }




  render() {
    const query = this.state.query
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic To-do list!</h1>
          <TaskAddBar
          query = {query}
          addNewItem = {this.addNewItem}
          newItem = {this.state.newItem}
          handleInput = {this.state.handleInput}
          />
        </header>
        <TheList
        itemsTodo = {this.state.itemsList}
        itemsDone = {this.state.itemsList}
        // returnToToDo = {this.returnToToDo}
         />
      </div>
    );
  }
}

export default App;
