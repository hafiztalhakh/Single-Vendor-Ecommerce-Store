import React from 'react';
import {
    Navbar,
    Nav,
    Button,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
// import Avatar from '@material-ui/core/Avatar';

//Components
import LoginButton from '../loginAndSignup/Modal'

//Firebase
import firebase from '../../Config/Firebase';

export default class AppBar extends React.Component {

    state = {

    }

    render() {

        return (

            <React.Fragment>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
                    <Nav className="ml-auto">
                        {
                            this.props.isLoggedIn ? <MyAccoount user={this.props.user} /> : <LoginButton />
                        }

                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}

function MyAccoount(props) {

    var handleLogout = () => {
        firebase.auth().signOut()
            // .then(function() {
            //   })
            .catch(function (error) {

            });
    }

    return (
        <React.Fragment>
            <DropdownButton
        alignRight  
            variant="info"
            id="dropdown-item-button"
            title="My Account"
            >
            <Dropdown.Item as="button">Username</Dropdown.Item>
            <Dropdown.Item as="button">Submit Ad</Dropdown.Item>
            <Dropdown.Item as="button">My Ads</Dropdown.Item>
            <Dropdown.Item as="button">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
                style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}
                as="button"
                onClick={handleLogout}
            >
                Logout
            </Dropdown.Item>
        </DropdownButton>
        </React.Fragment>
    )
}