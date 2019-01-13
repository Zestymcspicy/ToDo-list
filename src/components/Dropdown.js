import React, { Component} from 'react'


class Dropdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      menuVisible : false,
      value : this.props.name
    }
    this.showDropdown=this.showDropdown.bind(this)
  }

changeValue(e) {
  let value = e.target.innerHTML;
  this.setState({value : value});
}

showDropdown(e) {
  e.preventDefault();
  this.state.menuVisible?
  this.setState({menuVisible : false}):
  this.setState({menuVisible : true})
}

  render() {
    return(
      <div>
        <div className="Dropdown">
          <span
          className="Dropdown-title"
          onClick={this.showDropdown}>
          {this.state.value===this.props.name?
          `${this.state.value}?`:
          `${this.state.value}`}
          </span>
        </div>
      { this.state.menuVisible ? (
        <ul className="Dropdown-list">
        {this.props.options.map((item, key) =>
          <li
          key={key}
          className="Dropdown-entry"
          onClick={(event)=>{this.props.setValue(event);this.showDropdown(event);this.changeValue(event)}}>
          {item}
          </li>)}
        </ul>):(null)
      }
      </div>
    )
  }
}

export default Dropdown
