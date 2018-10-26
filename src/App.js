import React, { Component } from 'react';
import { connect } from 'react-redux';

import scrollToComponent from 'react-scroll-to-component';

import ProfilePic from './images/profile.jpg';

import Controller from './Controller';

import './App.css';

const scrollOptions = {
  duration: 700,
  ease: 'inOutCube'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      midiEnabled: false,
      controllerName: 'N/A'
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <nav>
              <ul>
                <li>
                  <a
                    href="/#tokenize"
                    onClick={() => {
                      scrollToComponent(
                        this.tokenize,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Tokenize
                  </a>
                </li>
                <li>
                  <a
                    href="/#distribute"
                    onClick={() => {
                      scrollToComponent(
                        this.distribute,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Distribute
                  </a>
                </li>
                <li>
                  <a
                    href="/#contribute"
                    onClick={() => {
                      scrollToComponent(
                        this.contribute,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Assemble
                  </a>
                </li>
                <li>
                  <a
                    href="/#create"
                    onClick={() => {
                      scrollToComponent(
                        this.create,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Create
                  </a>
                </li>
                <li>
                  <a
                    href="/#forge"
                    onClick={() => {
                      scrollToComponent(
                        this.forge,
                        Object.assign(scrollOptions, { offset: 72 })
                      );
                    }}
                  >
                    Forge
                  </a>
                </li>
              </ul>

              <div>
                <a
                  href="/#"
                  onClick={() => {
                    scrollToComponent(this.home, scrollOptions);
                  }}
                >
                  <span className="title">alloy</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <section
          id="home"
          ref={section => {
            this.home = section;
          }}
        >
          <div className="wrapper">
            <h1>digital is free; digital is cheap.</h1>

            <h1>authentic scarcity:</h1>
            <ul>
              <li>moments in time</li>
              <li>positive energy</li>
              <li>new relationships</li>
              <li>generosity</li>
              <li>honesty</li>
            </ul>
          </div>
        </section>

        <section
          className="grey"
          id="tokenize"
          ref={section => {
            this.tokenize = section;
          }}
        >
          <div className="wrapper">
            <h2>tokenize any digital media</h2>
            <p>(ERC 998, 712) </p>
          </div>
        </section>
        <section
          id="distribute"
          ref={section => {
            this.distribute = section;
          }}
        >
          <div className="wrapper">
            <h2>distribute your tokens</h2>
            <p>use any means neccesary (bouncer, scavenger hunt) </p>
            <div>
              <div>
                <p>send</p>
              </div>
              <div>
                <p>scavenger hunt</p>
              </div>
              <div>
                <p>sell</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="assemble"
          className="grey"
          ref={section => {
            this.contribute = section;
          }}
        >
          <div className="wrapper">
            <h2>contribute</h2>
            <p>(race to contribute - merkle?)</p>
          </div>
        </section>
        <section
          id="create"
          ref={section => {
            this.create = section;
          }}
        >
          <div className="wrapper">
            (interactive midi)
            <Controller />
          </div>
        </section>

        {/* FORGE */}
        <section
          id="forge"
          className="grey"
          ref={section => {
            this.forge = section;
          }}
        >
          <div className="wrapper">
            <h2>forge a unique performance artifact</h2>
            <div>
              <p>The performance is now </p>
            </div>
            <div>
              <p>mobile phone</p>
            </div>
          </div>
        </section>

        <div className="wrapper">
          <footer>
            <div>
              <h4>About this project</h4>
              <p>
                This project is an expirement in using participation and
                responsibility to create meaning.
              </p>
            </div>
            <div>
              <img
                style={{ border: 'solid 1px #393939', borderRadius: '50%' }}
                src={ProfilePic}
                alt="profile pic of matt lovan"
              />
              <p>@mattlovan</p>
              <p>mattlovan@gmail.com</p>
            </div>
          </footer>
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
