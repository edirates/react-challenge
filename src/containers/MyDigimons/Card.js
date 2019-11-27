// Import React Stuff
import axios from '../../apis/axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// Import Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      justifyContent:"center", 
      flexWrap:"wrap"
    },
    card: {
      maxWidth: 375,
      margin:20, 
      textAlign:"center", 
      fontSize:18, 
      fontWeight:"bold", 
      color:"#2E3B55" 
    },
}));

const CardDetail = (props) => {
    const classes = useStyles();
    
    const [ digimon, setDigimon ] = useState({});
    const { id } = useParams();
    
    const myDigimons = useSelector(state => state.myDigimons);
    const found = myDigimons.filter((digimon) => {
        return digimon.id === Number(id);
    });

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
    }, [id]);

    if (found.length > 0) {
        return (
            <div className={classes.root}>
                <Card className={classes.card} key={digimon.id}>
                    <CardActionArea onClick={() => props.history.push("/digimon/"+digimon.id)}>
                        <CardMedia
                            component="img"
                            alt={'img-'+digimon.id}
                            image={digimon.img}
                            title={digimon.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {digimon.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {digimon.level}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display:"flex", justifyContent:"center" }}>
                        <Button 
                            size="small" 
                            color="secondary" 
                            startIcon={<Icon>close</Icon>} 
                            onClick={() => props.delDigimon(digimon.id)}>
                            Remove from My Digimons
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
    else {
        return (
            <h1 className="empty">First add digimon to your digimons.</h1>
        );
    }
}

export default withRouter(CardDetail);
