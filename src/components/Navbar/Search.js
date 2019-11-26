import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './hooks/useStyles';

const Search = (props) => {
    const classes = useStyles();
    return (
        <InputBase
            value={props.search} 
            onChange={props.change} 
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
    );
}

export default Search;