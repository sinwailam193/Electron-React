import React, { Component } from 'react';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
