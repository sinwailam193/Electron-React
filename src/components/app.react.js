import React, { Component } from 'react';
import Search from './search.react';
import Details from './details.react';
import Player from './player.react';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
        <Details title={"Track Title"} />
        <Player />
      </div>
    );
  }
}
