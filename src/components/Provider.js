import React from 'react';

const Context = React.createContext();

class Provider extends React.Component {
  state = { number: 10 };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
      <Provider>
        <Consumer />
      </Provider>
    )
  }
}

class Consumer extends React.Component {
  render() {
    return (
      <div>
        <Context.Consumer>
          {
            (context) => <p>{context.number}</p>
          }
        </Context.Consumer>
      </div>
    )
  }
}

export default Middle;