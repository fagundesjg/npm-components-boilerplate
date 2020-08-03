import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Sample } from 'sandbox/pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Sample} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export { Routes };
