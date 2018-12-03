import React, {Component} from 'react';
import calendarButton from "../images/calendar-button.jpg";

class DueDateModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalDisplayState : "none",
      monthsArray: ["January", "February", "March", "April", "May", "June","July",
      "August", "September", "October", "November", "December"]
    }
  }

// createDate = () => {
//   let year = document.getElementById("yearField").value;
//   let month = document.getElementById("monthField").value;
//   let hour = document.getElementById("hourField").value;
//   let minutes = document.getElementById("dateTimeDue").value;
// }

modalVisible = e => {
  this.state.modalDisplayState==="none"?
  this.setState({modalDisplayState:"block"}):
  this.setState({modalDisplayState:"none"})
}

  render () {
    return(
      <div>
      <button
      onClick={this.modalVisible}
      className="addDateButton"
      >
      <img style={{height: "20px", width: "20px"}} src={calendarButton} alt="add a due date" />
      </button>
        <div className="modal-container" style={{display: this.state.modalDisplayState}}>
          <input
          id="dateTimeDue"
          type="datetime"
          />
        </div>
      </div>
    )
  }
}

export default DueDateModal;
