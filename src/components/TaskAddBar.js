import React, { Component } from 'react';


class TaskAddBar extends Component {

  render() {
    return (
      <div>
      <input type="text"
      value={this.props.query}
      />
      <button>Add to List</button>
      </div>
    )
  }
}
export default TaskAddBar;
