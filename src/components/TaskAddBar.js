import React, { Component } from 'react';


class TaskAddBar extends Component {

  render() {
    return (
      <div className="task-add-bar">
      <form
      onSubmit={this.props.addNewItem}
      id="inputField"
      >
          <input type="text"
            placeholder={this.props.placeholder}
            onChange={this.props.handleInput}
            value={this.props.newItem}
            />
            <button
            type="submit"
            className="add-button"
            onClick={this.props.addNewItem}>
            Add to List
            </button>
            </form>
      </div>
    )
  }
}
export default TaskAddBar;
