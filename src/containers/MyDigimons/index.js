import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from './Card';
import Detail from './Detail';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
}));

const List = (props) => {
    const [spacing, setSpacing] = React.useState(0);
    const classes = useStyles();
    
    return (
        <Fragment>
            <CssBaseline />
            <Grid container spacing={spacing} style={{ marginTop:60 }}>
                <Grid item xs={12} md={8} style={{ backgroundColor:'#cfe8fc', borderRight:'1px solid whitesmoke'}}>
                    {
                        (props.myDigimons.length > 0)
                        ? <Card search={props.search} myDigimons={props.myDigimons} delDigimon={props.delDigimon} />
                        : <h1 className="empty">My Digimons is empty. Please add digimons first.</h1>
                    }
                </Grid>
                <Grid item xs={12} md={4} style={{ backgroundColor:'#cfe8fc', display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Route path="/mydigimons/detail/:id">
                        <Detail myDigimons={props.myDigimons} delDigimon={props.delDigimon} />
                    </Route>
                    <Route exact path="/mydigimons">
                        <h1 className="empty">Click avatars to see detail.</h1>
                    </Route>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default List;