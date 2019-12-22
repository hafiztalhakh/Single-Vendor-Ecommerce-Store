import React from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

//Components
import LoginForm from './Components/Login';
import RegisterForm from './Components/Register';

class ShowModal extends React.Component {

    state = {
        showRegister: false,
        showLogin: true,
    }

    componentWillReceiveProps() {
        this.setState({
            showRegister: false,
            showLogin: true,
        })
    }

    showRegisterForm = () => {
        this.setState({
            showRegister: true,
            showLogin: false,
        })
    }

    render() {

        const { showRegister, showLogin } = this.state;

        return (
            <Modal
                {...this.props}
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="modal-signup"
            >
                <Modal.Body>
                    {showRegister && <RegisterForm hideModal={this.props.hideModal} />}
                    {showLogin && <LoginForm hideModal={this.props.hideModal} signUp={this.showRegisterForm} />}
                </Modal.Body>
            </Modal>
        );
    }
}

export default function App() {
    const [modalShow, setModalShow] = React.useState(false);

    var login = () => {
        setModalShow(false);
    }

    return (
        <ButtonToolbar>
            <Button className="login-btn"
                onClick={() => setModalShow(true)}
                style={{
                    backgroundColor: "transparent", borderColor: 'transparent',
                    color: 'white', marginRight: 10, fontWeight: 'bold', height: 50
                }}
            >
                Login
            </Button>

            <ShowModal
                show={modalShow}
                onHide={() => login()}
                hideModal={login}
            />
        </ButtonToolbar>
    );
}