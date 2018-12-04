import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import 'font-awesome/css/font-awesome.min.css';
import Main from './component/Main';
import Shop from './component/Shop';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} /> 
          <Route path="/shop" component={Shop} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
