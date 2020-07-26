import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const TitleBar = () => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <h1>Plan your day!</h1>
    </Toolbar>
  </AppBar>
);

export default TitleBar;
