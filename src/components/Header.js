import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Tao Chen's Portfolio
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/education">Education</Button>
      <Button color="inherit" component={Link} to="/projects">Projects</Button>
      <Button color="inherit" component={Link} to="/work-experience">Work Experience</Button>
      <Button color="inherit" component={Link} to="/skills">Skills</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
