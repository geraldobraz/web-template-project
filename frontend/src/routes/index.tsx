import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewComponent from '../pages/NewComponent';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={NewComponent} />
  </Switch>
);

export default Routes;
