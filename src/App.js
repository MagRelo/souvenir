import React, { Component } from 'react';
import { connect } from 'react-redux';

import scrollToComponent from 'react-scroll-to-component';

import ProfilePic from './images/profile.jpg';
import Phone from './images/phone.png';

import Controller from './controller/Controller';

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
                    Inputs
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
                        Object.assign(scrollOptions, { offset: 0 })
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
                  <span className="title">souvenir</span>
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
            <h3>
              A framework for creating{' '}
              <span className="highlight-light">meaningful</span> digital
              experiences by leveraging{' '}
              <span className="highlight-light">authentic</span> scarcity
            </h3>
            <div className="row row-2">
              <div>
                <h2>authentic scarcity:</h2>
                <ul>
                  <li>moments in time</li>
                  <li>positive energy</li>
                  <li>new relationships</li>
                  <li>generosity</li>
                  <li>honesty</li>
                </ul>
              </div>
            </div>
            <h2>
              with souvenir, it's never the same without you – your presence
              contributes to the final product.
            </h2>
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
            <h2>Create your inputs</h2>
            <p>(ERC 998, 712) </p>

            <div className="text-center">
              <label className="upper">Case Studies</label>
            </div>

            <div className="row row-3 text-center">
              <div>
                <h4>Painting</h4>
                <p>pantone colors</p>
              </div>
              <div>
                <h4>Music</h4>
                <p>audio samples</p>
              </div>
              <div>
                <h4>Improv</h4>
                <p>characters</p>
              </div>
            </div>
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
            <h2>create (interactive midi)</h2>

            <div className="text-center">
              <label className="upper">Case Studies</label>
            </div>
            <div className="row row-3 text-center">
              <div>
                <h4>Painting</h4>
                <p>pantone colors</p>
              </div>
              <div>
                <h4>Music</h4>
                <p>audio samples</p>
                <Controller />
              </div>
              <div>
                <h4>Improv</h4>
                <p>characters</p>
              </div>
            </div>
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
            <div
              style={{
                display: 'grid',
                gridTemplateRows: 'auto 1fr',
                gridTemplateColumns: '3fr 2fr'
              }}
            >
              <div
                style={{
                  gridColumnStart: 1,
                  gridColumnEnd: 1,
                  gridRowStart: 1,
                  gridRowEnd: 2
                }}
              >
                <h2>forge an authentic artifact</h2>
              </div>
              <div
                style={{
                  gridColumnStart: 1,
                  gridColumnEnd: 1,
                  gridRowStart: 2,
                  gridRowEnd: 3
                }}
              >
                <h3>More than the sum of its parts</h3>
                <p>The performance is now </p>
                <h3>exactly as rare as it should be</h3>
                <p>participants become owners</p>
                <h3>innovate with ownership</h3>
                <p>redefine ownership with programatic incentives</p>
              </div>

              <div
                style={{
                  gridColumnStart: 2,
                  gridColumnEnd: 2,
                  gridRowStart: 1,
                  gridRowEnd: 3,
                  textAlign: 'center'
                }}
              >
                <h3>souvenir App</h3>
                <img className="iphone" src={Phone} alt="iphone" />
                <p>coming soon</p>
              </div>
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
  return {};
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
