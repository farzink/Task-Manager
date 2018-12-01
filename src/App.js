import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        {process.env.REACT_APP_VERSION}
        {process.env.NODE_ENV}
        <a href="#" className="waves-effect waves-light btn-small"><i className="material-icons right">cloud</i>button</a>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1 hoverable">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#" className="waves-teal">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <a class="waves-effect waves-teal btn-large" href="#" onClick = { e => {
          e.preventDefault()
          alert()
        }}>Wave</a>
      </div>
    );
  }
}

export default App;
