import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import SignIn from './components/login/sign_in';
import SignUp from './components/login/sign_up';
import EnsureLoggedIn from './components/login/ensure_logged_in';
import MainPage from './components/mainPage/main_page';
import ResultsPage from './components/results/results_page';
import ViewWashroom from './components/view/view_washroom';
import VoteForm from './components/new/vote_form';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="MainPage">
        <Switch>
          <Route path='/login/Login' component={SignIn} />
          <Route path='/login/SignUp' component={SignUp} />
          <EnsureLoggedIn>
            <Switch>
              <Route path='/new/:id' component={VoteForm} />
              <Route path='/view/:id' component={ViewWashroom} />
              <Route path='/results' component={ResultsPage} />
              <Route path='/' component={MainPage} />
            </Switch>
          </EnsureLoggedIn>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
