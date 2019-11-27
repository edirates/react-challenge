// Import React Stuff
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../store/actions';

// Import Material UI
import InputBase from '@material-ui/core/InputBase';
import useStyles from './hooks/useStyles';

const Search = () => {
    const classes = useStyles();
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value));
    }

    return (
        <InputBase
            value={search} 
            onChange={handleChange} 
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