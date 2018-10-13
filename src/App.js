import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import './App.css';

function buildButtons(sample) {
  return (
    <div key={sample.name} className="button">
      {' '}
    </div>
  );
}

class App extends Component {
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
            {this.props.samples.map(sample => {
              return buildButtons(sample);
            })}
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
