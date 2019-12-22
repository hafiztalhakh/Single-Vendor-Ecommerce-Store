import React, { useRef, useEffect } from 'react';
import {
    Navbar,
    Nav,
    // Button,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import Badge from '@material-ui/core/Badge';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DnsIcon from '@material-ui/icons/Dns';

// import swal from 'sweetalert';

// React Router
// import { Link } from 'react-router-dom';

// Axios
// import axios from 'axios';

// Assets
// import Logo from '../../Assets/Images/GiverPay-01.png';

//Components
import LoginButton from '../loginAndSignup/Modal';
import ItemSearchBar from '../ItemSearchBar/ItemSearchBar'

//Firebase
import firebase from '../../Config/Firebase';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    mainAppbar: {
        height: 76,
        fontSize: '1 rem',
        fontWeight: 400,
        lineHeight: 1.5,
        boxShadow: 'none'
    },
    appBar: {
        display: 'block',
        boxShadow: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuButton: {
        display: 'block',
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        fontSize: 31,
        fontWeight: 'bold',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    search: {
        position: 'relative',
        borderRadius: 60,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#f0f0f0',
        border: "1px solid silver",
        '&:hover': {
            border: "1px solid rgb(255,0,131)"
        },
        marginRight: theme.spacing(0.2),
        marginLeft: 0,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: '30%',
            display: 'block'
        },
    },
    searchButton: {
        display: 'none',
        backgroundColor: '#FF0083',
        height: 40,
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    },
    searchMobile: {
        position: 'relative',
        // borderRadius: 60,
        backgroundColor: '#f0f0f0',
        border: "1px solid silver",
        '&:hover': {
            border: "1px solid rgb(255,0,131)"
        },
        marginRight: theme.spacing(0.2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            padding: theme.spacing(1, 1, 1, 2),
        },
        '&:focus': {
            border: "1px solid rgb(255,0,131)"
        },
        // borderRadius: 60,
        // borderTopRightRadius: 0,
        // borderBottomRightRadius: 0,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    iconButton: {
        padding: 10,
    },
    CountrySelector: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    placeholder: {
        height: 76,
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    avatar: {
        margin: 10,
    },
    paperMenu: {
        boxShadow: 'none'
    }
}));

export default class AppBar extends React.Component {

    state = {

    }

    render() {

        return (

            <React.Fragment>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" style={{ marginLeft: 85, fontSize: '30px' }}>Ecommerce <span style={{color: '#008081'}}>Store</span></Navbar.Brand>
                    <Nav className="ml-auto" style={{
                            marginRight: 85,
                        }}>
                            {
                                this.props.isLoggedIn ? <MyAccoount user={this.props.user} /> : <LoginButton />
                            }
                            <Button variant="contained"
                                style={{
                                    backgroundColor: '#008081',
                                    color: 'white',
                                    // borderColor: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}
                            >
                                Sell
                    </Button>
                    </Nav>
                </Navbar>
                <ItemSearchBar />
            </React.Fragment>
        )
    }
}

function MyAccoount(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(false);

    var logout = () => {
        firebase.auth().signOut()
            // .then(function() {
            //   })
            .catch(function (error) {

            });
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>

            <Button onClick={handleClick} style={{ marginRight: 30 }}><Avatar alt="Remy Sharp"
            // src={photoURL}
            /></Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: 40 }}
            >
                <Paper className={classes.paperMenu}>
                    <Typography variant="inherit">
                        <ListItem>
                            <Avatar
                                alt="Adelle Charles"
                            // src={photoURL}
                            />
                            <Grid style={{ marginLeft: 10 }}>
                                <Grid sm={12}>
                                    <Typography style={{ fontSize: 13 }} variant="caption">
                                        Hello,
                                    </Typography>
                                </Grid>
                                <Grid sm={12}>
                                    <Typography style={{ fontWeight: 'bold' }} variant='body1'>
                                        {/* {displayName} */}
                                    </Typography>
                                </Grid>
                                <Grid sm={12}>
                                    {/* <Link to='/user'> */}
                                    <Typography variant="caption">
                                        View and edit profile
                                                                </Typography>
                                    {/* </Link> */}
                                </Grid>
                            </Grid>
                        </ListItem>
                    </Typography>
                    <Divider />
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.root}
                    >
                        {/* <Link to='/myads' style={{ textDecoration: 'none', color: 'black' }}> */}
                        <ListItem button>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Ads" />
                        </ListItem>
                        {/* </Link> */}
                        <Divider />

                        {/* <Link to='/settings' style={{ textDecoration: 'none', color: 'black' }}> */}
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                        {/* </Link> */}
                        <Divider />
                        <ListItem onClick={logout} button>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Paper>
            </Menu>
        </React.Fragment>
    )
}