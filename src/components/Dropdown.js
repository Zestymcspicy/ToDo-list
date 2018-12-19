import React, { Component} from 'react'

let month;

class Dropdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      menuVisible : false,
    }
    this.showDropdown=this.showDropdown.bind(this)
  }

showDropdown(e) {
  e.preventDefault();
  this.state.menuVisible?
  this.setState({menuVisible : false}):
  this.setState({menuVisible : true})
}

setValue(e) {
  month = e.target.innerHTML.toString();
  console.log(month)
}

  render() {
    return(
      <div>
        <div className="Dropdown">
          <span
          className="Dropdown-title"
          onClick={this.showDropdown}>
          {this.props.name}
          </span>
        </div>
      { this.state.menuVisible ? (
        <ul className="Dropdown-list">
        {this.props.options.map((item, key) =>
          <li
          key={key}
          className="Dropdown-entry"
          onClick={this.setValue}>
          {item}
          </li>)}
        </ul>):(null)
      }
      </div>
    )
  }
}

export default Dropdown
