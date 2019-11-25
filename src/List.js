import React, { useState } from 'react';

const List = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                Digimon Lists = 
                <div className="lists">
                {   
                    (props.digimons.length > 0) && 
                    props.digimons.filter((digimon) => {
                        return digimon.name.toLowerCase().includes(props.search.toLowerCase());
                    })
                    .map((digimon) => {
                        return (
                            <div className="card" key={digimon.id}>
                                <img src={digimon.img} alt={'img-'+digimon.id}></img>
                                <div> Name : {digimon.name} </div>
                                <div> Level : {digimon.level} </div>
                            </div>
                        ); 
                    })
                }
                </div>
            </header>
        </div>
    );
}

export default List;