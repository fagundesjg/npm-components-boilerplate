import React, { useState } from 'react';

import { IAttendants } from './types';
import { Grid, Paper, Typography } from '@material-ui/core';
import { SidebarOption, AppBar } from 'components';

const AttendantsComponent = (props: IAttendants) => {
  return (
    <AppBar pagePath={SidebarOption.Attendants}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Frentistas</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Attendants = AttendantsComponent;

export { Attendants };
