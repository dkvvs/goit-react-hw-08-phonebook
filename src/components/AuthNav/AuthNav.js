import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: '#a6b1e0',
    fontSize: 24,
    fontWeight: 500,
    marginRight: 20,
  },
  activeLink: {
    color: '#ffffff',
  },
}));

export default function AuthNav() {
  const classes = useStyles();

  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Sign in
      </NavLink>
    </div>
  );
}
