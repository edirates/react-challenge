import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './hooks/useStyles';
import Search from './Search';
import {
  Link,
  withRouter
} from "react-router-dom";

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="fixed" style={{ background: '#2E3B55' }}>
              <Toolbar>
                <img src="/logo.png" className="logo" alt="logo" style={{ cursor:"pointer" }} onClick={() => props.history.push("/")}></img>
                  <Typography className={classes.title} variant="h6" noWrap style={{ textAlign:"center" }}>
                    <Link to="/mydigimons" style={{ margin:10, color:"white", textDecoration:"none" }}>
                      My Digimons
                    </Link>
                  </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <Search 
                    search={props.search} 
                    change={props.change} 
                  />
                </div>
              </Toolbar>
          </AppBar>
        </div>
    );
}

export default withRouter(NavBar);