import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import { withSample } from './withSample';
import { ISample } from './types';
import {} from './styles';
import { AppBar } from 'components';

const SampleComponent = (props: ISample) => {
  const [opened, setOpened] = useState<boolean>(false);

  function toggleOpened() {
    setOpened((prev) => !prev);
  }

  return (
    <AppBar opened={opened} toggleOpened={toggleOpened}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Sample Page Test</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Sample = withSample(SampleComponent);

export { Sample };
