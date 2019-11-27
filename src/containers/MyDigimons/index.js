// Import React Stuff
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from "react-router-dom";
import { setSearch } from "../../store/actions";
import Avatar from './Avatar';
import Card from './Card';

// Import Material UI
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

const List = (props) => {
    const myDigimons = useSelector(state => state.myDigimons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearch(''));
    },[]);

    return (
        <Fragment>
            <CssBaseline />
            <Grid container style={{ marginTop:60 }}>
                <Grid item xs={12} md={8} style={{ backgroundColor:'#cfe8fc', borderRight:'1px solid whitesmoke'}}>
                    {
                        (myDigimons.length > 0)
                        ? <Avatar delDigimon={props.delDigimon} />
                        : <h1 className="empty">My Digimons is empty. Please add digimon first.</h1>
                    }
                </Grid>
                <Grid item xs={12} md={4} style={{ backgroundColor:'#cfe8fc', display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Route path="/mydigimons/detail/:id">
                        <Card delDigimon={props.delDigimon} />
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