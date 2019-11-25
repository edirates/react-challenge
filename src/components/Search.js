import React from 'react';

const Search = (props) => {
    return (
        <div className="App">
            <header className="Search-header">
                Search = <input type="text" value={props.search} onChange={props.change} />
            </header>
        </div>
    );
}

export default Search;