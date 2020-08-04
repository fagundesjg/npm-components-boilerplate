import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import { IHome } from './types';
import { AppBar, SidebarOption } from 'components';

const HomeComponent = (props: IHome) => {
  return (
    <AppBar pagePath={SidebarOption.Home}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Home</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Home = HomeComponent;

export { Home };
