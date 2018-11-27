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
      query: "What you need do?"
    }
    // this.returnToToDo = this.returnToToDo.bind(this)
  }



  render() {
    const query = this.state.query
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic To-do list!</h1>
          <TaskAddBar
          query = {query}
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
