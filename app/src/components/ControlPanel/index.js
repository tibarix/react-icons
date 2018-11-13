import React, { Component } from 'react';

export default class ControlPanel extends Component {

  constructor(props){
    super(props);
    this.state = {
      icons : [
        {
          label:"Beer",
          source: require('../../svg/001-beer.svg')
        },
        {
          label:"Invitation",
          source: require('../../svg/002-invitation.svg')
        },
      ],
      selectedIcon : {}
    }
  }

change = event => {
  if(!event.target.value) return null
  this.setState({selectedIcon :this.state.icons[event.target.value]} , () => {
    console.log(this.state.selectedIcon)
  })
}
  renderSelection = () => {
    if(!this.state.icons) return null;
    return (
     <select onChange={this.change}>
      <option value="none">none</option>
      {this.state.icons.map((icon, index) =>
       <option key={index} value={index}>{icon.label}</option>
      )}
     </select>
    );
 }
  render() {
    return (
      <div className="control-panel-container">
        {this.renderSelection()}
      </div>
    );
  }
}
