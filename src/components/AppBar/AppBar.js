import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 80,
  },
  header: {
    width: 1100,
    margin: '0 auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.header}>
            <header className={classes.nav}>
              <Navigation />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
