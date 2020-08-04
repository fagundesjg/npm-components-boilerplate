import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { IUsers } from './types';
import { SidebarOption, AppBar } from 'components';

const UsersComponent = (props: IUsers) => {
  return (
    <AppBar pagePath={SidebarOption.Users}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Usuários</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Users = UsersComponent;

export { Users };
