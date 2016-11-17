import React, { Component } from 'react';
import './css/TinyBob.css';

const placeholderSrcWide = 'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png';
const placeholderSrcSquare = 'http://larics.rasip.fer.hr/wp-content/uploads/2016/04/default-placeholder.png';
const kenneyLogoSrc = 'http://kenney.nl/data/img/logo.png';
const gamepipeLogoSrc = '/viterbi-gamepipe-logo.png';

class TinyBob extends Component {
  render() {
    return (
      <div className="TinyBob">
        <div className="jumbotron TinyBob-header">
          <div className="container">
            <h1 className="TinyBob-header-title TinyBob-title">
              <span className="TinyBob-big-letter">T</span>
              INY
              <span className="TinyBob-big-letter">B</span>
              OB
            </h1>
            <h2 className="TinyBob-header-subtitle TinyBob-title">
              A fast-paced racing platformer game
            </h2>
          </div>
        </div>

        <div className="TinyBob-game-section">
          <div className="container">
            <h1 className="TinyBob-section-title TinyBob-title">
              <span className="TinyBob-big-letter">G</span>
              AMEPLAY
            </h1>
            <p>
              Be the first to cross the finish line at the top of the stage,
              and slow your friends down to ensure your victory!
              Don't forget to collect coins along the way!
            </p>
            <p>
              TinyBob combines the feel of Super Smash Bros with the racing
              and combat elements of Mario Kart.
            </p>
            <div className="TinyBob-game-images">
              <img alt="Gameplay" src={placeholderSrcWide} className="TinyBob-game-image"/>
              <img alt="Gameplay" src={placeholderSrcWide} className="TinyBob-game-image"/>
            </div>
            <div className="TinyBob-game-captions">
              <div className="TinyBob-game-caption">
                <p>Caption about first screenshot</p>
              </div>
              <div className="TinyBob-game-caption">
                <p>Caption about second screenshot</p>
              </div>
            </div>
          </div>
        </div>

        <div className="TinyBob-team-section">
          <div className="container">
            <h1 className="TinyBob-section-title TinyBob-title">
              <span className="TinyBob-big-letter">T</span>
              EAM
            </h1>
            {this._renderPerson(0)}
            {this._renderPerson(1)}
            {this._renderPerson(2)}
          </div>
        </div>

        <div className="TinyBob-footer-section">
          <div className="container">
            <div className="row TinyBob-footer-row">
              <div className="col-sm-4 col-md-3 TinyBob-footer-logo-positioning">
                <img alt="Kenney logo" src={kenneyLogoSrc} className="TinyBob-footer-logo"/>
              </div>
              <p className="col-sm-8 col-md-9 TinyBob-footer-p">
                We thank <a href="http://kenney.nl">kenney.nl</a> for providing free art assets which were used in the making of TinyBob.
              </p>
            </div>
            <div className="row TinyBob-footer-row">
              <div className="col-sm-4 col-md-3 TinyBob-footer-logo-positioning">
                <div className="TinyBob-footer-logo-backing">
                  <img alt="USC Viterbi GamePipe logo" src={gamepipeLogoSrc} className="TinyBob-footer-logo"/>
                </div>
              </div>
              <p className="col-sm-8 col-md-9 TinyBob-footer-p">
                Made for the CSCI-523 Networked Games class at USC in fall 2016.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  _renderPerson(index) {
    const people = [
      {
        name: 'Nick Wong',
        position: 'Team Lead, Networking engineer',
        bio: 'Some sentences about the team member Nick Wong will go here, but for now this is just placeholder text.',
        img: '/eric.jpg',
      },
      {
        name: 'Matt Carey',
        position: 'Gameplay engineer, 3D Art Assets',
        bio: 'Some sentences about the team member Matt Carey will go here, but for now this is just placeholder text.',
        img: '/eric.jpg',
      },
      {
        name: 'Eric Gauderman',
        position: 'Gameplay engineer, Balancing',
        bio: 'Some sentences about the team member Eric Gauderman will go here, but for now this is just placeholder text.',
        img: '/eric.jpg',
      },
    ];
    const person = people[index];

    return (
      <div className="col-sm-4">
        <div className="TinyBob-team-column">
          <div className="TinyBob-team-image-container">
            <img alt="Team member" src={person.img} className="TinyBob-team-image"/>
          </div>
          <h2 className="TinyBob-team-name TinyBob-title">
            {person.name}
          </h2>
          <div className="TinyBob-team-position">
            {person.position}
          </div>
          <p>
            {person.bio}
          </p>
        </div>
      </div>
    );
  }
}

export default TinyBob;
