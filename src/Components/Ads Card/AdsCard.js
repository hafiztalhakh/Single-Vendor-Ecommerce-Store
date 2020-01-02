import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    box: {
        position: 'relative',
    },
};

const ads = ['a', 'b', 'c', 'd'];

class AdsCard extends React.Component {

    renderCard = () => {

        const { classes } = this.props;


        return (
            <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Rs 25,000
                                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Mobile for Sell
                                        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }

    render() {

        return (

            <div>
                <Grid container spacing={3}>

                    {
                        ads.map((val, index) => {
                            return (
                                <Grid item key={index} sm={12} xs={12} md={6} lg={3} xl={3}>
                                    {this.renderCard()}
                                </Grid>
                            )
                        })
                    }

                </Grid>

            </div>

        )
    }
}
export default withStyles(styles)(AdsCard);

