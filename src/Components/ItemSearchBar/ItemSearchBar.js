import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search'

//Components
import CitySelector from './Components/CitySelector';
import CategoriesSelector from './Components/CategoriesSelector';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        },
    },
    appBar: {
        // height: 76,
        boxShadow: 'none'
    },
    arrowDropDownAnimations: {
        transitionProperty: 'transform',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s',
    },
    button: {
        color: 'white',
        '&:hover': {
            color: 'rgb(255,0,131)',
        },
    },
    input1: {
        backgroundColor: 'white',
        height: 47,
        '&:hover': {
            border: "1px solid white"
        },
        '&:focus': {
            border: "1px solid white"
        },
        justifyContent: 'center',
        alignItems: 'center',
    },
    notchedOutline: {
        border: 'none',
    }
});

class Searchbar extends React.Component {

    state = {
        searchQuery: '',
        country: '',
    }

    componentDidMount() {
        if (window.location.pathname.split('/')[2] !== undefined &&
            window.location.pathname.includes('items') &&
            window.location.pathname.split('/')[2] !== 'p-categories' &&
            window.location.pathname.split('/')[2] !== 'categories')
            this.setState({
                searchQuery: window.location.pathname.split('/')[2].replace("-", ' ')
            })
    }

    getCountry = country => {
        this.setState({
            country: country.value,
        }, () => {
            console.log(this.state.country);
        })
    }

    renderSearchbar = () => {
        const { classes } = this.props;
        const { country } = this.state;

        return (
            <React.Fragment>
                <CitySelector getCountry={this.getCountry} />
                <div style={{ width: 15 }}></div>
                <TextField
                    className={classes.input1}
                    variant="outlined"
                    fullWidth
                    placeholder="Enter keyword to search"
                    name="searchQuery"
                    value={this.state.searchQuery}
                    onChange={event => this.setState({ searchQuery: event.target.value })}
                    style={{ backgroundColor: '#f5f5f5' }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                        }
                    }}
                />
                <div style={{ width: 15, }}></div>
                <CategoriesSelector />
                <div style={{ width: 15 }}></div>
                {country ?
                    <Button
                        onClick={() => window.location.replace(`/items/${this.state.searchQuery.replace(/ /g, "-")}/${country}`)}
                        variant="contained"
                        style={{ backgroundColor: "purple", color: '#f5f5f5', fontWeight: 'bold', height: 47, width: 250 }}>
                        <Search style={{ marginRight: 5 }} />
                        Search
                    </Button>
                    :
                    <Button
                        onClick={() => window.location.replace(`/items/${this.state.searchQuery.replace(/ /g, "-")}`)}
                        variant="contained"
                        style={{ backgroundColor: "#008081", color: '#f5f5f5', fontWeight: 'bold', height: 47, width: 250 }}>
                        <Search style={{ marginRight: 5 }} />
                        Search
                    </Button>
                }

            </React.Fragment>
        )
    }


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar
                    position="static"
                    style={{ backgroundColor: '#343A40' }}
                    className={classes.appBar}>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Toolbar style={{ marginTop: 5 }}>
                            {this.renderSearchbar()}
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Searchbar);
