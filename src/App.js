import React from 'react';

//Firebase
import firebase from './Config/Firebase';

//Components
import Navbar from './Components/Navbar/Navbar';

//Screens
import LandingPage from './Screens/Landing Page/LandingPage';
import ProductDetails from './Screens/Product Details/ProductDetails';
import UserProfile from './Screens/User Profile/UserProfile';
import SubmitAd from './Screens/Submit Ad/SubmitAd';


class App extends React.Component {

    state = {
        user: null,
        reload: false,
        isLoggedIn: false,
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged((user) => {
            let uId = 'null';
            let uEmail = 'null';
            if (user) {
              uId = firebase.auth().currentUser.uid;
              uEmail = firebase.auth().currentUser.email;
              // console.log(uEmail);
              this.setState({
                usrEmail: uEmail,
                user: uId,
                isLoggedIn: true,
              });
      
              this.loginTrue();
      
            } else {
              this.setState({
                isLoggedIn: false,
              })
            }
          });
    }

    render() {

        return (

            <React.Fragment>

                <Navbar user={this.state.user} isLoggedIn={this.state.isLoggedIn}/>
                <LandingPage/>
            </React.Fragment>
        )
    }
}

export default App;