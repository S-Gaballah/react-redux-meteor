import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import configureStore from '../imports/store/configureStore';
import { Provider } from 'react-redux'; // provider attach our store to our react container components
import { Router, browserHistory } from 'react-router';
import routes from '../imports/routes';
import { Tracker } from 'meteor/tracker';
import { loadCourses } from '../imports/actions/courseActions';
import '../imports/styles/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


Meteor.startup(() => {
  const store = configureStore();
  Meteor.subscribe("getCourses",()=>{
    store.dispatch(loadCourses());
  });

  Tracker.autorun(() => {
    render(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes}></Router>
      </Provider>
      , document.getElementById('app'));
  });
});
