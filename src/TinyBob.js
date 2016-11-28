import React, { Component } from 'react';
import './css/TinyBob.css';
import nickImage from './images/nick.jpg';
import mattImage from './images/matt.png';
import ericImage from './images/eric.jpg';
import bounceImage from './images/bounce_picture.png';
import pushImage from './images/push_picture.png';
import pullImage from './images/pull_picture.png';
import dashImage from './images/dash_picture.png';
import unrealImage from './images/unreal.png';
import kenneyImage from './images/kenney.png';
import gamepipeImage from './images/viterbi-gamepipe-logo.png';

const placeholderSrcWide = 'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png';

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
              and attack your enemies with collectible powers to ensure your victory!
              Don't forget to collect coins along the way!
            </p>
            <p>
              TinyBob combines the movement of Super Smash Bros with the racing
              and combat elements of Mario Kart.
            </p>
            <div className="row">
              <div className="col-sm-6">
                <div className="TinyBob-game-image-container">
                  <img alt="Gameplay" src={pushImage} className="TinyBob-game-image"/>
                </div>
                <p className="TinyBob-game-caption">Hit your enemies with Push to send them flying off the platform!</p>
              </div>
              <div className="col-sm-6">
                <div className="TinyBob-game-image-container">
                  <img alt="Gameplay" src={pullImage} className="TinyBob-game-image"/>
                </div>
                <p className="TinyBob-game-caption">If your opponent is ahead, hit them with Pull to make them fall off their platform and lose their lead!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="TinyBob-game-image-container">
                  <img alt="Gameplay" src={bounceImage} className="TinyBob-game-image"/>
                </div>
                <p className="TinyBob-game-caption">Use Bounce and Conveyor Belt platforms to your advantage to pass by your enemies!</p>
              </div>
              <div className="col-sm-6">
                <div className="TinyBob-game-image-container">
                  <img alt="Gameplay" src={dashImage} className="TinyBob-game-image"/>
                </div>
                <p className="TinyBob-game-caption">Do a Dash to get zoom past your enemies to the finish line!</p>
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
                <img alt="Unreal Engine logo" src={unrealImage} className="TinyBob-footer-logo"/>
              </div>
              <p className="col-sm-8 col-md-9 TinyBob-footer-paragraph">
                Made in Unreal Engine 4.
              </p>
            </div>
            <div className="row TinyBob-footer-row">
              <div className="col-sm-4 col-md-3 TinyBob-footer-logo-positioning">
                <img alt="Kenney logo" src={kenneyImage} className="TinyBob-footer-logo"/>
              </div>
              <p className="col-sm-8 col-md-9 TinyBob-footer-paragraph">
                We thank <a href="http://kenney.nl" target="_blank">kenney.nl</a> for providing free art assets which were used in the making of TinyBob.
              </p>
            </div>
            <div className="row TinyBob-footer-row">
              <div className="col-sm-4 col-md-3 TinyBob-footer-logo-positioning">
                <div className="TinyBob-footer-logo-backing">
                  <img alt="USC Viterbi GamePipe logo" src={gamepipeImage} className="TinyBob-footer-logo"/>
                </div>
              </div>
              <p className="col-sm-8 col-md-9 TinyBob-footer-paragraph">
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
        jobs: [
          'Team lead',
          'Networking',
          'User interface',
          'Level chunk system',
          'Level design',
        ],
        img: nickImage,
        website: 'http://nicholasgwong.net',
      },
      {
        name: 'Matt Carey',
        jobs: [
          'Platform effects',
          '3D asset creation',
          'User interface',
          'Level design',
        ],
        img: mattImage,
        website: 'http://matts.games',
      },
      {
        name: 'Eric Gauderman',
        jobs: [
          'Power-ups & Coins',
          'Speed balancing',
          'Website',
          'Level design',
        ],
        img: ericImage,
        website: 'http://egauderman.github.io',
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
          <div className="TinyBob-team-jobs-container">
            <p>
              <a href={person.website} target="_blank">website</a>
            </p>
            <ul className="TinyBob-team-jobs">
              {person.jobs.map((job, i) => (
                <li key={i}>
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TinyBob;
