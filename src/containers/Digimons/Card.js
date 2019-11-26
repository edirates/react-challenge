import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bigAvatar: {
      width: 200,
      height: 200,
    },
    card: {
      maxWidth: 275,
    },
}));

const Cards = (props) => {
    const classes = useStyles();
    
    const digimons = props.digimons.filter((digimon) => {
        return digimon.name.toLowerCase().includes(props.search.toLowerCase());
    });

    return (
        <div className={classes.root} style={{ display:"flex", justifyContent:"center", flexWrap:"wrap" }} >
        {   
            digimons.map((digimon) => {
                return (
                    <Card className={classes.card} key={digimon.id} style={{ margin:20, textAlign:"center", fontSize:18, fontWeight:"bold", color:"#2E3B55" }}>
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
    // ============== Avatar Mode ==============
    // return (
    //     <div className={classes.root} style={{ display:"flex", justifyContent:"center", flexWrap:"wrap" }} >
    //     {   
    //         (props.digimons.length > 0) && 
    //         props.digimons.filter((digimon) => {
    //             return digimon.name.toLowerCase().includes(props.search.toLowerCase());
    //         })
    //         .map((digimon) => {
    //             return (
    //                 <div key={digimon.id} style={{ margin:20, textAlign:"center", fontSize:18, fontWeight:"bold", color:"#2E3B55" }}>
    //                     <Avatar alt={'img-'+digimon.id} src={digimon.img} className={classes.bigAvatar} />
    //                     <div style={{ marginTop:20 }}> Name : {digimon.name} </div>
    //                     <div> Level : {digimon.level} </div>
    //                 </div>
    //             ); 
    //         })
    //     }
    //     </div>
    // );
}

export default withRouter(Cards);
