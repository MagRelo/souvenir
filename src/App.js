import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import WebMidi from 'webmidi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midiEnabled: false,
      '176-11': false,
      '176-12': false,
      '176-13': false,
      '176-14': false
    };
  }

  componentDidMount() {
    WebMidi.enable(err => {
      if (err) console.log(err);
      const S4 = WebMidi.getInputByName('Traktor Kontrol S4 MK2 Input');
      S4.addListener('controlchange', 'all', this.handleMIDI.bind(this));
    });
  }

  handleMIDI(event) {
    const control = event.data[0] + '-' + event.data[1];
    const status = !!event.data[2];

    console.log('control: ' + control, ' on: ' + status);

    return this.setState({
      [control]: status
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span style={{ color: 'yellow' }}>stone soup</span>
          </h1>
        </header>

        <div className="main">
          <h1>test #1: music</h1>
          <h2>The controller</h2>
          <div className="controller">
            <div
              className="button"
              style={this.state['176-11'] ? { backgroundColor: 'yellow' } : {}}
            >
              {' '}
            </div>
            <div
              className="button"
              style={this.state['176-12'] ? { backgroundColor: 'yellow' } : {}}
            >
              {' '}
            </div>
            <div
              className="button"
              style={this.state['176-13'] ? { backgroundColor: 'yellow' } : {}}
            >
              {' '}
            </div>
            <div
              className="button"
              style={this.state['176-14'] ? { backgroundColor: 'yellow' } : {}}
            >
              {' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    samples: state.controller.samples
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

// import logo from './logo.svg';
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

// <h2>Hypothesis</h2>
// <p>
//   A great performance is more than the sum of it's parts – it's a
//   once-in-a-lifetime experience.
// </p>
// <h2>The setup</h2>
// <p>
//   16 audio samples have been tokenized and distributed to my friends and
//   colleagues. If they are donated back to the performance contract then
//   they will be available to be played through this interface.
// </p>
// <p> On November 1, 2018 I'll try to </p>
