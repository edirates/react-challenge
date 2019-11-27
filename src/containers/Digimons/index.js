// Import React Stuff
import React, { Fragment } from 'react';
import Card from './Card';

// Import Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const List = (props) => {
    return (
        <Fragment>
            <CssBaseline />
            <Container style={{ margin:0, padding:0, marginTop:60 }}>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc'}}>
                    <Card addDigimon={props.addDigimon} />
                </Typography>
            </Container>
        </Fragment>
    );
}

export default List;