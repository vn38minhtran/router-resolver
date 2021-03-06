import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory} from 'history';
import {Router, useRouterHistory} from 'react-router';
import {RouterResolver} from 'router-resolver';
import App from 'components/App.js';
import pkg from '../../package.json';
import Spinner from 'components/common/Spinner';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-progress-bar-plus/lib/progress-bar.css';
import 'assets/styles/app.scss';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: require('components/pages/PageHome')
  },
  childRoutes: [
    require('./routes/Example1Route'),
    require('./routes/Example2Route'),
    require('./routes/Example3Route'),
    require('./routes/Example4Route')
  ]
};

const DEV = process && process.env && process.env.NODE_ENV === 'development';
const history = useRouterHistory(createHistory)({
  basename: '/' + (DEV ? '' : pkg.name)
});

const renderInitial = () => {
  return <Spinner isLoading={true} fullScreen={true}/>;
};

const onError = (error) => {
  console.log('Error: ', error);
};

const run = () => {
  ReactDOM.render(
    <Router routes={routes}
      history={history}
      render={props => (
        <RouterResolver {...props} renderInitial={renderInitial} onError={onError}/>
      )}/>,
    document.getElementById('app')
  );
};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
