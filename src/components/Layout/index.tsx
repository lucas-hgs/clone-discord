import React from 'react';

import { Grid } from './styles';
import { ServerList } from '../ServerList';

export function Layout() {
  return (
    <Grid>
      <ServerList />
    </Grid>
  )
}