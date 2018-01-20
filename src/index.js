import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import MainPage from './components/mainPage/main_page';
import ResultsPage from './components/results/results_page';
import ViewWashroom from './components/view/view_washroom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//TO COME: ABILITY TO RATE WASHROOM (Initially, all values will be chosen by us)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="MainPage">
        <Switch>
          <Route path='/results/:id' component={ViewWashroom} />
          <Route path='/results' component={ResultsPage} />
          <Route path='/' component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
