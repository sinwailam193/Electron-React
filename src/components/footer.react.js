import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <p>Love from <img src="http://www.sinwailam.tech/img/github.jpg" className="logo"/>
        & <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/SoundCloud_logo.svg/1280px-SoundCloud_logo.svg.png" className="soundcloud"/></p>
      </div>
    );
  }
}
