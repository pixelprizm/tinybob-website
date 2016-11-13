import React, { Component } from 'react';
import './css/TinyBob.css';

class TinyBob extends Component {
  render() {
    return (
      <div className="TinyBob">
        <div className="jumbotron TinyBob-header">
          <div className="container TinyBob-header-container">
            <h1 className="TinyBob-header-title">
              <span className="TinyBob-header-big-letter">T</span>
              INY
              <span className="TinyBob-header-big-letter">B</span>
              OB
            </h1>
            <h2 className="TinyBob-header-subtitle">
              A fast-paced racing platformer game
            </h2>
          </div>
        </div>

        <div className="TinyBob-section">
          <div className="container">
            hi
          </div>
        </div>
      </div>
    );
  }
}

export default TinyBob;
