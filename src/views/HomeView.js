import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 900,
    fontSize: 48,
    textAlign: 'center',
    color: '#3f51b5',
    textTransform: 'uppercase',
  },
  description: {
    fontWeight: 500,
    fontSize: 25,
    textAlign: 'center',
  },
}));

export default function HomeView() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>phonebook</h1>
      <p className={classes.description}>
        To view or add contacts, login or register
      </p>
    </div>
  );
}
