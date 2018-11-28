import React, { Component } from 'react';


class TaskAddBar extends Component {

  render() {
    const task = this.props.newItem
    return (
      <div>
      <form onSubmit={this.props.addNewItem}>
          <input type="text"
            placeholder="What do you need to do?"
            onChange={this.props.handleInput}
            value={task}
            />
            <button
            type="submit"
            onClick={this.props.addNewItem}>
            Add to List
            </button>
            </form>
      </div>
    )
  }
}
export default TaskAddBar;
