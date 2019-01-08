import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";

import { BrowserRouter, Route } from 'react-router-dom';
import { Products, Todo, Counter, TodoRedux } from './components';

import store from './redux/store';
import Sample from './components/sample';

const Home = () => <h2>ES6 functional component!!!</h2>;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <App />
        <Route exact path='/' component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
        <Route path="/todoRedux" component={TodoRedux} />
        <Route path="/sample" component={Sample} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
