import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import WebMidi from 'webmidi';
import { Howl } from 'howler';
import { Object } from 'core-js';

const samples = {
  '176-15': {
    name: 'space lander',
    howl: new Howl({
      src: ['/sounds/Casio-VZ-10M-Space-Lander-C2.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-16': {
    name: 'oooh',
    howl: new Howl({
      src: ['/sounds/Alesis-Fusion-Voice-Oohs-C4.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-17': {
    name: 'dark pad',
    howl: new Howl({
      src: ['/sounds/Ensoniq-ESQ-1-Omen-Pad-C2.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-18': {
    name: 'atari crunch',
    howl: new Howl({
      src: ['/sounds/M-Audio-Venom-Atari-C2.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-11': {
    name: 'kick',
    howl: new Howl({
      src: ['/sounds/Boom-Kick.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-12': {
    name: 'snare',
    howl: new Howl({
      src: ['/sounds/Ensoniq-ESQ-1-Snare.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-13': {
    name: 'closed hat',
    howl: new Howl({
      src: ['/sounds/Closed-Hi-Hat-1.wav']
    }),
    status: 'ready',
    on: false
  },
  '176-14': {
    name: 'crash',
    howl: new Howl({
      src: ['/sounds/Crash-Cymbal-1.wav']
    }),
    status: 'ready',
    on: false
  },
  '177-11': {
    name: 'breakdown loop',
    howl: new Howl({
      src: ['/sounds/Casio-MT-600-Disco-2.wav']
    }),
    status: 'ready',
    on: false
  },
  '177-12': {
    name: 'disco loop',
    howl: new Howl({
      src: ['/sounds/Casio-MT-45-Disco.wav']
    }),
    status: 'ready',
    on: false
  },
  '177-13': {
    name: 'swing loop',
    howl: new Howl({
      src: ['/sounds/Casio-MT-45-Beguine.wav']
    }),
    status: 'ready',
    on: false
  },
  '177-14': {
    name: "80's party",
    howl: new Howl({
      src: ['/sounds/Casio-MT-45-16-Beat.wav']
    }),
    status: 'ready',
    on: false
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      midiEnabled: false,
      controllerName: 'N/A'
    };
  }

  componentDidMount() {
    WebMidi.enable(err => {
      if (err) console.log(err);

      const name = 'Traktor Kontrol S4 MK2 Input';
      const midiInput = WebMidi.getInputByName(name);
      midiInput.addListener('controlchange', 'all', this.handleMIDI.bind(this));

      this.setState({
        midiEnabled: midiInput.state === 'connected',
        controllerName: name
      });
    });
  }

  handleMIDI(event) {
    const control = event.data[0] + '-' + event.data[1];
    const isActive = !!event.data[2];

    if (samples[control]) {
      samples[control].on = isActive;

      if (isActive) {
        samples[control].howl.play();
      } else {
        samples[control].howl.stop();
      }

      console.log('control: ' + control, ' on: ' + isActive);

      return this.setState({
        [control]: isActive
      });
    } else {
      console.log('undefined input: ', control);
    }
  }

  handleClick(event) {
    const control = event.target.id;
    const isActive = true;

    samples[event.target.id].on = true;
    samples[event.target.id].howl.play();

    setTimeout(() => {
      samples[control].on = false;
      return this.setState({
        [control]: isActive
      });
    }, 150);

    return this.setState({
      [control]: isActive
    });
  }

  createPad(sample) {
    return (
      <div
        key={sample}
        id={sample}
        className="button"
        style={
          samples[sample].on
            ? { backgroundColor: 'yellow', color: 'black' }
            : {}
        }
        onClick={this.handleClick.bind(this)}
      >
        <div>
          <div>{samples[sample].name}</div>
          <div>{samples[sample].status}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span style={{ color: 'yellow' }}>souvenir</span>
            <small>experiments in digital artifacts</small>
          </h1>
        </header>

        <div className="main">
          <h2>1. musical performance</h2>
          <p className="description">
            This page represents a performance contract. 16 audio samples have
            been tokenized and distributed. When the tokens are donated back to
            this performance the sample will be unlocked.
          </p>
          <div>
            <div className="controller">
              {Object.keys(samples).map(sample => this.createPad(sample))}
            </div>

            <p className="midiStatus">
              MIDI Enabled: {this.state.midiEnabled.toString()} – Controller:{' '}
              {this.state.controllerName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // samples: state.controller.samples
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // cancelBid: index => {
    //   dispatch(cancelBid(index));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
