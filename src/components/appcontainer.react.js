import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import { fetch_playlist, set_song } from '../actions/fetch.action';
import { client_id } from '../../config';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0
    };
  }

  componentDidMount() {
    this.props.fetch_playlist()
      .then(() => {
        this._randomSong();
      });
  }

  _randomSong = () => {
    const tracksLength = this.props.tracks.length;
    const randomNumber = Math.floor((Math.random() * tracksLength) + 1);
    this.props.set_song(this.props.tracks[randomNumber]);
  }

  _prepareUrl = (url) => {
    return `${url}?client_id=${client_id}`;
  };

  _handleSongPlaying = (audio) => {
    this.setState({
      elapsed: this._formatMilliseconds(audio.position),
      total: this._formatMilliseconds(audio.duration),
      position: audio.position / audio.duration
    });
  };

  _handleSongFinished = () => {
    this._randomSong();
  };

  _formatMilliseconds = (milliseconds) => {
    let hours = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;

    let minutes = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;

    let seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  render() {
    return (
      <div className="scotch_music">
        <Sound
          url={this.prepareUrl(this.props.track.stream_url)}
          playStatus={this.state.playStatus}
          onPlaying={this._handleSongPlaying}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished}/>
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks.tracks,
    song: state.tracks.song
  };
}

export default connect(mapStateToProps, {fetch_playlist, set_song})(AppContainer);
