import axios from '../../apis/axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from './Card';

const CardDetail = (props) => {
    const [ digimon, setDigimon ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/id/'+id
        })
        .then((result) => {
            setDigimon(result.data[0]);
        })
        .catch((err) => {
            console.log(err);
        });
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

export default CardDetail;