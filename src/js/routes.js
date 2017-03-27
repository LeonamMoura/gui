import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Login from './containers/login/'
import Full from './containers/full/'
import Templates from './views/deviceTemplates/'
import Dashboard from './views/dashboard/'
import {Devices,ViewDevice}  from './views/devices/'
import LoginActions from './actions/LoginActions'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Full}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" name="Home" component={Dashboard} />
      <Route name="Device manager" >
        <Route path="deviceManager" name="Device manager" component={Dashboard} />
        <Route path="device" name="Devices">
          <IndexRoute component={Devices} />
          <Route path="list" name="Device list" component={Devices} />
          <Route path="stats" name="Device Dashboard" component={Dashboard} />
          <Route path="id/:deviceId" name="Device detail" component={ViewDevice} />
          <Route path="id/:deviceId/edit" name="Device detail" component={Dashboard} />
        </Route>
        <Route path="template" name="Templates">
          <IndexRoute component={Templates} />
          <Route path="list" name="Template list" component={Templates} />
          <Route path="stats" name="Template Dashboard" component={Dashboard} />
          <Route path="id/:templateId" name="Template detail" component={Templates} />
          <Route path="id/:templateId/edit" name="Template detail" component={Dashboard} />
        </Route>
      </Route>
      <Route path="config" name="Settings" component={Dashboard} />
      <Route path="flows" name="Information Flows" component={Dashboard} />
      <Route path="alarm" name="Alarm" component={Dashboard} />
      <Route path="auth" name="Authentication" component={Dashboard}>
        <Route path="user" name="Template detail" component={Dashboard} />
        <Route path="permissions" name="Template detail" component={Dashboard} />
      </Route>

      <Route path="deploy" name="Deployment" component={Dashboard} >
        <Route path="plugins" name="Template detail" component={Dashboard} />
        <Route path="applications" name="Template detail" component={Dashboard} />
        <Route path="alarm" name="Template detail" component={Dashboard} />
      </Route>
    </Route>
  </Router>
);
