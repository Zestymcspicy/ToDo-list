import React, { Component } from 'react';
import DueDateModal from './DueDateModal.js'


class TheList extends Component {
  constructor(props) {
    super(props);
    this.state = {dateDisplay:"block"}
  }

toggleDateDisplay = () => {
  this.state.dateDisplay=="block"?
  this.setState({dateDisplay:"none"}):
  this.setState({dateDisplay:"block"})
}

  render() {
    return (
      <div className="Listbox">
      <div className="To-do">
      <span>To-do</span>
      <ul>
      {this.props.itemsList.filter(item=> item.status==="todo").map((item, key) =>
        <li
        className="ToDoListEntry"
        key={item.key}>
        <div className="ItemNameCheckboxDiv">
        <input
        onChange={this.props.toggleList}
        type="checkbox"
        name={item.name} />
        {item.name}
        </div>
        <DueDateModal
        toggleDateDisplay={this.toggleDateDisplay}
        itemKey={item.key}
        setDate={this.props.setDate}
        dueDate={item.dueDate}/>
        <span className="DueDateDislpay" style={{display : this.state.dateDisplay}}>{item.dueDateString}</span>
        </li>)}
      </ul>
      </div>
      <div className="Completed">
      <span>Done!</span>
      <ul>
      {this.props.itemsList.filter(item => item.status==="done").map((item, key) =>
        <li key={key}
        className="Completed-items">
        <input
        onChange={this.props.toggleList}
        key={key}
        type="checkbox"
        defaultChecked
        name={item.name}/>
        {item.name}
        </li>)}
      </ul>
      </div>
      </div>
    )
  }
}

export default TheList;
