import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controller from './Controller';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      midiEnabled: false,
      controllerName: 'N/A'
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <section>
          <header>
            <nav>
              <ul>
                <li>Tokenize</li>
                <li>Distribute</li>
                <li>Assemble</li>
                <li>Performance</li>
                <li>Forge and Seal </li>
              </ul>

              <div>
                <span className="title">souvenir</span>
              </div>
            </nav>
          </header>

          <div>
            <h1>Live Performance</h1>

            <h3>1. Create and tokenize audio samples (ERC 998, 712) </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              rerum odio minus nemo neque quaerat inventore modi. Laudantium
              rem, voluptatem aliquid officiis eveniet, tempore aperiam quod
              animi nisi commodi adipisci?
            </p>

            <h3>2. Distribute samples (bouncer, scavenger hunt) </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              rerum odio minus nemo neque quaerat inventore modi. Laudantium
              rem, voluptatem aliquid officiis eveniet, tempore aperiam quod
              animi nisi commodi adipisci?
            </p>

            <h3>3. Donate tokens to enable audio samples (merkle?) </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, laboriosam! Fugiat debitis omnis voluptatibus mollitia
              harum sapiente est modi ratione, sed eum vel laboriosam
              praesentium asperiores optio, voluptatum nulla culpa.
            </p>

            <h3>4. Live Performance (interactive midi)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, laboriosam! Fugiat debitis omnis voluptatibus mollitia
              harum sapiente est modi ratione, sed eum vel laboriosam
              praesentium asperiores optio, voluptatum nulla culpa.
            </p>

            <h3>5. Permanantly seal performance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, laboriosam! Fugiat debitis omnis voluptatibus mollitia
              harum sapiente est modi ratione, sed eum vel laboriosam
              praesentium asperiores optio, voluptatum nulla culpa.
            </p>
          </div>
        </section>

        <section className="tokenize grey">
          <h2>tokenize</h2>
        </section>
        <section className="distribute">
          <h2>distribute</h2>
        </section>
        <section className="donate grey">
          <h2>dontate</h2>
        </section>
        <section className="perform">
          <Controller />
        </section>
        <section className="seal  grey">
          <h2>seal</h2>
        </section>
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
