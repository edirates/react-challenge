// Import React Stuff
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import Material UI
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bigAvatar: {
      width: 100,
      height: 100,
      margin: 10,
      cursor:"pointer"
    },
}));

const Avatars = (props) => {
    const classes = useStyles();
    
    const search = useSelector(state => state.search);
    const myDigimons = useSelector(state => state.myDigimons);

    const filteredDigimon = myDigimons.filter((digimon) => {
        return digimon.name.toLowerCase().includes(search.toLowerCase());
    });
    
    return (
        <div className="my-digimons" >
        {   
            (myDigimons.length > 0) && 
                filteredDigimon.map((digimon) => {
                    return (
                        <div key={digimon.id}>
                            <Avatar 
                                alt={'img-'+digimon.id} 
                                src={digimon.img} 
                                className={classes.bigAvatar} 
                                onClick={() => props.history.push("/mydigimons/detail/"+digimon.id)}
                            />
                        </div>
                    ); 
                })
        }
        </div>
    );
}

export default withRouter(Avatars);
