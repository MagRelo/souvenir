import React, { Component } from 'react';
import { connect } from 'react-redux';

import './controller.css';

import WebMidi from 'webmidi';
import { Object } from 'core-js';

const eventTypes = ['midimessage'];

class Controller extends Component {
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

      WebMidi.inputs.map(input => {
        return console.log(input.name);
      });

      // const name = 'Traktor Kontrol S4 MK2 Input';
      const name = 'Midi Fighter 3D̨w';
      const midiInput = WebMidi.getInputByName('Midi Fighter 3D ̨w');
      if (midiInput) {
        eventTypes.map(type => {
          midiInput.addListener(type, 'all', this.handleMIDI.bind(this));

          return console.log('added ', type, ' listener');
        });

        this.setState({
          midiEnabled: midiInput.state === 'connected',
          controllerName: name
        });
      } else {
        console.log('not found?');
      }
    });
  }

  handleMIDI(event) {
    const isActive = event.data[0] === 146;
    const button = event.data[1];

    // const control = event.data[0]

    console.log('button: ', button, 'is active: ', isActive);

    if (this.props.samples[button]) {
      this.props.samples[button].on = isActive;

      if (isActive) {
        this.props.samples[button].howl.play();
      } else {
        if (button === 67 || button === 66) {
          this.props.samples[button].howl.stop();
        }
      }

      // console.log(event.type, ' - control: ' + control, ' on: ' + isActive);

      return this.setState({
        [button]: isActive
      });
    } else {
      // console.log(event.type, ', undefined input: ', control);
    }
  }

  handleClick(event) {
    const control = event.target.id;
    const isActive = true;

    this.props.samples[event.target.id].on = true;
    this.props.samples[event.target.id].howl.play();

    setTimeout(() => {
      this.props.samples[control].on = false;
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
        className="pad"
        key={sample}
        id={sample}
        style={
          this.props.samples[sample].on
            ? { backgroundColor: 'yellow', color: 'black' }
            : {}
        }
        onClick={this.handleClick.bind(this)}
      >
        <div>
          <div>{this.props.samples[sample].name}</div>
          {/* <div>{this.props.samples[sample].status}</div> */}
        </div>
      </div>
    );
  }

  // <p className="midiStatus">
  // MIDI Enabled: {this.state.midiEnabled.toString()} – Controller:{' '}
  // {this.state.controllerName}
  // </p>

  render() {
    return (
      <div className="controller-wrapper">
        <div className="stage">
          <div className="scene">
            <div className="cube">
              <div className="cube__face cube__face--front">front</div>
              <div className="cube__face cube__face--back">back</div>
              <div className="cube__face cube__face--right">right</div>
              <div className="cube__face cube__face--left">left</div>
              <div className="cube__face cube__face--top">
                <div className="controller">
                  {Object.keys(this.props.samples).map(sample =>
                    this.createPad(sample)
                  )}
                </div>
              </div>
              <div className="cube__face cube__face--bottom">bottom</div>
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
)(Controller);
