import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Background from './components/Background';
import CakeContainer from './components/CakeContainer'
import CakeItem from './components/CakeItem'

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store, { history } from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'

import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" components={App}>
        <IndexRoute component={Background} />
        <Route path='/cakes' component={CakeContainer}></Route>
        <Route path='/cakes/:id' component={CakeItem}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
injectTapEventPlugin();
