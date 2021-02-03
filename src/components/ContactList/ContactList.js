import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/contacts';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem } from '@material-ui/core';
import List from '@material-ui/core/List';
import { ListItemText } from '@material-ui/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddIcCallSharpIcon from '@material-ui/icons/AddIcCallSharp';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  avatar: {
    marginRight: 20,
    width: 30,
    height: 30,
  },
  list: {
    width: 500,
    margin: '0 auto',
  },
}));

export default function ContactList() {
  const contacts = useSelector(phonebookSelectors.getVisibleContact);
  const dispatch = useDispatch();
  const classes = useStyles();

  const contactRemove = id => dispatch(phonebookOperations.deleteContact(id));

  useEffect(() => {
    const fetchContacts = () => dispatch(phonebookOperations.fetchContacts());
    fetchContacts();
  }, [dispatch]);

  const onRemove = id => contactRemove(id);

  if (!contacts.length) return null;

  return (
    <List className={classes.list}>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AddIcCallSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Name: ${name}`}
            secondary={`Number: ${number}`}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => onRemove(id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
