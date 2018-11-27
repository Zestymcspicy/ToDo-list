import React, { Component } from 'react';


class TaskAddBar extends Component {
  render() {
    // const itemName = this.props.query;
    return (
      <div>
        <form onSubmit={this.props.addNewItem}>
          <input type="text"
            placeholder={this.props.query}
            onChange={this.props.handleInput}
            />
            <button
            type="submit">
            Add to List
            </button>
        </form>
      </div>
    )
  }
}
export default TaskAddBar;
