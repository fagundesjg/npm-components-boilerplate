import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Users, Attendants } from 'sandbox/pages';
import { SidebarOption } from 'components';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path={SidebarOption.Home} component={Home} />
          <Route exact path={SidebarOption.Users} component={Users} />
          <Route exact path={SidebarOption.Attendants} component={Attendants} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export { Routes };
