import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchCoinList from './Routes/SearchCoinList';
const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchCoinList} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
