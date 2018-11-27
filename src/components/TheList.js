import React, { Component } from 'react';

class TheList extends Component {
  render() {
    return (
      <div className="listbox">
      <div className="To-do">
      <span>To-do</span>
      <ul>
      {this.props.itemsTodo.filter(item=> item.status==="todo").map((item, key) =>
        <li key={key}>
        <input type="checkbox" />
        {item.name}</li>)}
      </ul>
      </div>
      <div className="Completed">
      <span>Done!</span>
      <ul>
      {this.props.itemsDone.filter(item => item.status==="done").map((item, key) =>
        <li key={key}>
        <input type="checkbox" checked onClick={()=>this.props.returnToToDo(item)}/>
        {item.name}</li>)}
      </ul>
      </div>
      </div>
    )
  }
}

export default TheList;
