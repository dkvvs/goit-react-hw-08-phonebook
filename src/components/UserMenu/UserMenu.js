import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#000000',
    },
  },
  avatar: {
    marginRight: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: 400,
    marginRight: 12,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  textButton: {
    color: '#00e1ff',
  },
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar}>
        <AccountBoxIcon />
      </Avatar>
      <span className={classes.name}>
        Welcome, <span className={classes.textButton}>{name}</span>
      </span>
      <div className={classes.root}>
        <Button
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
