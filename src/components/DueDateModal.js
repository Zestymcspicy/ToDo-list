import React, {Component} from 'react';
import calendarButton from "../images/calendar-button.jpg";
import Dropdown from "./Dropdown.js";


class DueDateModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalDisplayState : "none",
      calendarButtonDisplay: "block",
    }
  }


// createDate = () => {
//   let year = document.getElementById("yearField").value;
//   let month = document.getElementById("monthField").value;
//   let hour = document.getElementById("hourField").value;
//   let minutes = document.getElementById("dateTimeDue").value;
// }

//function for the visibility of the modal
modalVisible = e => {
  this.state.modalDisplayState==="none"?
  this.setState({
    modalDisplayState:"flex",
    CalendarButtonDisplay:"none"
}):
  this.setState({
    modalDisplayState:"none",
    CalendarButtonDisplay:"block"
  })
}


  render () {
    const yearsArray = new Array(30).fill(1,0).map((x, index)=> x=2018+index);
    const daysArray = new Array(30).fill(1,0).map((x, index)=>x=x+index);
    const monthsArray = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    return(
      <div>
        <div>
          <button
          onClick={this.modalVisible}
          className="AddDateButton"
          style={{display: this.state.CalendarButtonDisplay}}>
            <img style={{height: "20px", width: "20px"}} src={calendarButton} alt="add a due date" />
          </button>
        </div>
        <div>
          <div className="Modal-container" style={{display: this.state.modalDisplayState}}>
            <span className="DueDateSpan">Add a due date</span>
            <span
            className="Close-button"
            onClick={this.modalVisible}>X</span>
            <Dropdown
            options={monthsArray}
            name="month?"/>
            <Dropdown
            options={daysArray}
            name="day?"/>
            <Dropdown
            options={yearsArray}
            name="year?"/>
          </div>
        </div>
      </div>
    )
  }
}

export default DueDateModal;
