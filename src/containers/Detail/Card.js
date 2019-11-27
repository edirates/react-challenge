// Import React Stuff
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Material UI
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    bigAvatar: {
        width: 300,
        height: 300,
    },
    card: {
      display: 'flex',
      maxWidth: 550,
      margin: 'auto',
      borderRadius: 10
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 300,
      height: 300,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
}));

const CardDetail = (props) => {
    const classes = useStyles();
    return (
      <Card className="card-detail" style={{ backgroundColor: '#cfe8fc'}}>
        <Avatar alt={'img-'+props.digimon.id} src={props.digimon.img} className={classes.bigAvatar} />
        <div className={classes.details}>
          <CardContent className={classes.content} style={{ textAlign:"center" }}>
            <Typography component="h5" variant="h5">
              { props.digimon.name }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              { props.digimon.level }
            </Typography>
            <Button 
              variant="outlined" 
              color="primary"
              startIcon={<Icon>add-box</Icon>} 
              onClick={() => props.addDigimon(props.digimon)}>
              Add to My Digimons
            </Button>
          </CardContent>
        </div>
      </Card>
    );
}

export default withRouter(CardDetail);
