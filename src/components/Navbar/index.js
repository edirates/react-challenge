// Import React Stuff
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../store/actions';
import { withRouter } from "react-router-dom";
import Search from './Search';

// Import Material UI
import useStyles from './hooks/useStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const NavBar = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <img src="/logo.png" className="logo" alt="logo" onClick={() => props.history.push("/")}></img>
          <Typography className={classes.title} variant="h6" noWrap style={{ textAlign:"center" }}>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Search />
          </div>
          <Button variant="contained" color="primary" onClick={() => props.history.push("/mydigimons")} style={{ marginLeft:10 }}>
            My Digimons
          </Button>
          <Button variant="contained" color="secondary" onClick={() => dispatch(setLogout())} style={{ marginLeft:10 }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);