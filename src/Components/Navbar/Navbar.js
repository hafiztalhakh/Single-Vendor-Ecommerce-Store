import React from 'react';
import {
    Navbar,
    Nav,
    Button
} from 'react-bootstrap';

//Components
import LoginButton from '../loginAndSignup/Modal'

export default class AppBar extends React.Component {

    render() {

        return (

            <React.Fragment>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
                    <Nav className="ml-auto">
                        <LoginButton/>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}