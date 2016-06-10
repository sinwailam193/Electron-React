import React, { Component } from 'react';
import Search from './search.react';
import Details from './details.react';
import Player from './player.react';
import Progress from './progress.react';
import Footer from './footer.react';
import AppContainer from './appcontainer.react';

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
        <Progress position={"0.3"} elapsed={"00:00"} total={"0:40"} />
        <Footer />
      </div>
    );
  }
}
