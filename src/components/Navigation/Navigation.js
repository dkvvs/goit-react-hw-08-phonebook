import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
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

export default function Navigation() {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
}
