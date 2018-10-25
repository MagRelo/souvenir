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
        <header>
          <div className="wrapper">
            <nav>
              <ul>
                <li>
                  <a href="/#tokenize">Tokenize</a>
                </li>
                <li>
                  <a href="/#distribute">Scatter</a>
                </li>
                <li>
                  <a href="/#contribute">Assemble</a>
                </li>
                <li>
                  <a href="/#performance">Create</a>
                </li>
                <li>
                  <a href="/#forge">Forge</a>{' '}
                </li>
              </ul>

              <div>
                <a href="/#">
                  <span className="title">alloy</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <section id="home">
          <div className="wrapper">
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

        <section id="tokenize" className=" grey">
          <div className="wrapper">
            <h2>tokenize any digital media</h2>
            <p>test</p>
          </div>
        </section>
        <section id="distribute">
          <div className="wrapper">
            <h2>distribute your tokens</h2>
            <p>test</p>
          </div>
        </section>
        <section id="contribute" className="grey">
          <div className="wrapper">
            <h2>contribute</h2>
            <p>test</p>
          </div>
        </section>
        <section id="performance">
          <div className="wrapper">
            <Controller />
          </div>
        </section>
        <section id="forge" className="grey">
          <div className="wrapper">
            <h2>forge a unique performance artifact</h2>
            <p>The performance is now </p>
          </div>
        </section>

        <footer>
          <div>About this project</div>
          <div>made by Matt Lovan</div>
        </footer>
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
