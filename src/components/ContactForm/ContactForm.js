import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/contacts';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  form: {
    width: 400,
    marginTop: theme.spacing(2),
    margin: '0 auto',
    textAligne: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const contacts = useSelector(phonebookSelectors.getContacts);

  const onAddContact = nameContact =>
    dispatch(phonebookOperations.addContact(nameContact));

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isValidateForm = validateForm(name, number);
    if (!isValidateForm) {
      return;
    }
    onAddContact({ id: uuidv4(), name, number });
    reset();
  };

  const validateForm = (name, number) => {
    if (!name.trim() || !number.trim()) {
      return false;
    }
    return onCheckContact(name);
  };

  const onCheckContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    if (isExistContact) {
      toast.warn('A contact with the same name already exists!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return !isExistContact;
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Name"
          autoFocus
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Number"
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add contact
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
}
