import React, { Component } from 'react';
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
        {
        name : "go sleep",
        status: "done",
        key: Date.now(),
        timeDue: new Date(),
        }
      ],
      newItem : "",
      placeholder : "What do you need to do?",
    }
    // this.addNewItem = this.addNewItem.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  //item adding function
 addNewItem = e => {
   e.preventDefault ()
   console.log(e.target.value)
   if (this.state.newItem === "" ) {
      return
   }
   if (this.state.itemsList.some(x => x.name===this.state.newItem)) {
     document.getElementById('inputField').reset();
     this.setState({placeholder: "That's already on your list"})
   }else{
     const newItem = {name: this.state.newItem, status:"todo", key: Date.now()}
     console.log(newItem);
     const itemsList = [...this.state.itemsList, newItem];
     document.getElementById('inputField').reset();
     this.setState({
       newItem: "",
       itemsList: itemsList,
       placeholder: "Alright! What else?"
       })
     }
   }
//toggle from the "todo" to the "done" list
   toggleList = e => {
     const toggleName = e.target.name;
     const itemToToggle = this.state.itemsList.filter(x=>x.name===toggleName)[0]
     const nextArray = this.state.itemsList.filter(x=>x.name!==toggleName)
     itemToToggle.status === "todo" ? itemToToggle.status="done" : itemToToggle.status="todo";
     this.setState({itemsList: nextArray.concat(itemToToggle)})
   }

   handleInput = e => {
     const itemName = e.target.value;
        this.setState({newItem: itemName})
   }

   addDueDate = dateTime => {

   }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic To-do list!</h1>
          <TaskAddBar
          addNewItem = {this.addNewItem}
          handleInput = {this.handleInput}
          placeholder = {this.state.placeholder}
          />
        </header>
        <TheList
        inputElement={this.inputElement}
        itemsList = {this.state.itemsList}
        toggleList = {this.toggleList}
         />
         <footer>
         <span className="Attributions">Calendar icon made by http://www.elegantthemes.com/ from www.flaticon.com </span>
         </footer>
      </div>
    );
  }
}

export default App;
