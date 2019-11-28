// Import React Stuff
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/actions';

// Import Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
}));

const Login = (props) => {
    const classes = useStyles();
    
    const dispatch = useDispatch();

    return (
        <form onSubmit={() => { dispatch(setLogin()); props.history.push("/"); }} className="login-form">
            <img src="/logo.png" alt="logo" style={{ maxWidth:400, marginBottom:50 }}></img>
            <div>
                <TextField
                id="outlined-search"
                label="Your Name"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
                />
            </div>
            <Button variant="contained" type="submit" color="primary" style={{ width:400 }}>
                Get Started
            </Button>
        </form>
    );
}

export default withRouter(Login);