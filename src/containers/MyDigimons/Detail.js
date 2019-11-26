import axios from '../../apis/axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      width: 100,
      height: 100,
    },
    card: {
      maxWidth: 375,
    },
}));

const Detail = (props) => {
    const classes = useStyles();
    
    const [ digimon, setDigimon ] = useState({});
    const { id } = useParams();

    const found = props.myDigimons.filter((digimon) => {
        return digimon.id == id;
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
            <div className={classes.root} style={{ display:"flex", justifyContent:"center", flexWrap:"wrap" }} >
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
    // ============== Avatar Mode ==============
    // return (
    //     <div className="my-digimons" >
    //     {   
    //         (props.myDigimons.length > 0) && 
    //         props.myDigimons.filter((digimon) => {
    //             return digimon.name.toLowerCase().includes(props.search.toLowerCase());
    //         })
    //         .map((digimon) => {
    //             return (
    //                 <div key={digimon.id} style={{ margin:10, textAlign:"center", fontSize:18, fontWeight:"bold", color:"#2E3B55" }}>
    //                     <Avatar alt={'img-'+digimon.id} src={digimon.img} className={classes.bigAvatar} style={{ cursor:"pointer" }} onClick={() => props.history.push("/mydigimons/detail/"+digimon.id)}/>
    //                 </div>
    //             ); 
    //         })
    //     }
    //     </div>
    // );
}

export default withRouter(Detail);