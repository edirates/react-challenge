// Import React Stuff
import axios from '../../apis/axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, getDigimonDetail } from '../../store/actions';
import Card from './Card';

// Import Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const List = (props) => {
    const { id } = useParams();
    
    const digimon = useSelector((state) => state.digimon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearch(''));
        dispatch(getDigimonDetail(id));
    }, []);

    return (
        <Fragment>
            <CssBaseline />
            <Container style={{ margin:0, padding:0, marginTop:60 }}>
                <Typography component="div">
                    <Card digimon={digimon} addDigimon={props.addDigimon} />
                </Typography>
            </Container>
        </Fragment>
    );
}

export default List;