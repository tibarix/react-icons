import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    return (
      <div className="preview-container">
      <img src={this.props.svg}/>
      </div>
    );
  }


}
