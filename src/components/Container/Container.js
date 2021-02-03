import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 1440,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
}));

export default function Container({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}
