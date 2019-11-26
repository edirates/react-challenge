import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from './Card';

const List = (props) => {
    return (
        <Fragment>
            <CssBaseline />
            <Container style={{ margin:0, padding:0, marginTop:60 }}>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc'}}>
                    <Card search={props.search} digimons={props.digimons} addDigimon={props.addDigimon} />
                </Typography>
            </Container>
        </Fragment>
    );
}

export default List;