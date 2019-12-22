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

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const ads = ['a', 'b', 'c', 'd'];

class AdsCard extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Container fluid>
                <Row>
                    {
                        ads.map((val, index) => {
                            return (
                                <Col key={index} sm={12} xs={12} md={6} lg={4} xl={3}>
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
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}
export default withStyles(styles)(AdsCard);