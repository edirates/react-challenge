// Import React Stuff
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    card: {
      maxWidth: 275,
      margin:20, 
      textAlign:"center", 
      fontSize:18, 
      fontWeight:"bold", 
      color:"#2E3B55"
    },
}));

const Cards = (props) => {
    const classes = useStyles();
    
    const search = useSelector(state => state.search);
    const digimons = useSelector(state => state.digimons);

    const filteredDigimon = digimons.filter((digimon) => {
        return digimon.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className={classes.root} style={{ display:"flex", justifyContent:"center", flexWrap:"wrap" }} >
        {   
            filteredDigimon.map((digimon) => {
                return (
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
                                color="primary" 
                                startIcon={<Icon>add-box</Icon>} 
                                onClick={() => props.addDigimon({
                                    id: digimon.id,
                                    name: digimon.name,
                                    img: digimon.img,
                                    level: digimon.level
                                })}>
                                Add to My Digimons
                            </Button>
                        </CardActions>
                    </Card>
                ); 
            })
        }
        </div>
    );
}

export default withRouter(Cards);
