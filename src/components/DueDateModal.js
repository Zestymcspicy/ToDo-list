import React, {Component} from 'react';
import calendarButton from "../images/calendar-button.jpg";
import Dropdown from "./Dropdown.js";


class DueDateModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monthValue : 0,
      dayValue: 0,
      yearValue: 0,
      modalDisplayState : "none",
      calendarButtonDisplay: "block"
    }
    this.setValue=this.setValue.bind(this);
  }



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

setValue = e => {
  e.preventDefault();
  e.target.classList.add("highlight");
  if(Number.isNaN(Number(e.target.innerHTML))){
    let month = e.target.innerHTML;
    this.setState({monthValue : month});
  } else {
    let dayOrYear = Number(e.target.innerHTML);
    dayOrYear>1000?
    this.setState({yearValue : dayOrYear}):
    this.setState({dayValue : dayOrYear});
  }
}


  render () {
    const yearsArray = new Array(30).fill(1,0).map((x, index)=> x=2018+index);
    const daysArray = new Array(30).fill(1,0).map((x, index)=>x=x+index);
    const monthsArray = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    return(
      <div>
      {this.props.dueDate==null?
        <div>
          <button
          onClick={this.modalVisible}
          className="AddDateButton"
          style={{display: this.state.CalendarButtonDisplay}}>
            <img style={{height: "20px", width: "20px"}} src={calendarButton} alt="add a due date" />
          </button>

        <div>
          <div className="Modal-container" style={{display: this.state.modalDisplayState}}>
            <span className="DueDateSpan">Add a due date</span>
            <span
            className="Close-button"
            onClick={this.modalVisible}>X</span>
            <Dropdown
            setValue={this.setValue}
            options={monthsArray}
            name="Month"/>
            <Dropdown
            setValue={this.setValue}
            options={daysArray}
            name="Day"/>
            <Dropdown
            setValue={this.setValue}
            options={yearsArray}
            name="Year"/>
            <div id="SetDateButton"
            onClick={this.props.setDate(this.state.monthValue, this.state.dayValue ,this.state.yearValue, this.props.itemKey)}>
              <span>
              Set Date
              </span>
            </div>
          </div>
        </div>
      </div>:
      <span>{this.props.dueDate}</span>}
      </div>
    )
  }
}

export default DueDateModal;
