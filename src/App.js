import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './redux';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/chart" component={Chart} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;
