import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors } from 'redux/contacts';
import * as actions from 'redux/contacts/phonebook-actions';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: 300,
    marginBottom: theme.spacing(1),
    margin: '0 auto',
    textAligne: 'center',
  },
  search: {
    margin: '0',
    color: '#3f51b5',
  },
}));

export default function Filter() {
  const filter = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChange = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <div className={classes.form}>
      <p className={classes.search}>Find contacts by name</p>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          label="Name"
          autoFocus
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          fullWidth
        />
      </form>
    </div>
  );
}
