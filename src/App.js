import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Mahendra</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/todo">Todos</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/counter">Counter</a></li>
                <li><a href="/todoRedux">Todo (Redux)</a></li>
                <li><a href="/sample">Sample</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
