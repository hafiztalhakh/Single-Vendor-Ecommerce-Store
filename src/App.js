import React from 'react';

//Components
import Navbar from './Components/Navbar/Navbar';

//Screens
import LandingPage from './Screens/Landing Page/LandingPage';
import ProductDetails from './Screens/Product Details/ProductDetails';
import UserProfile from './Screens/User Profile/UserProfile';
import SubmitAd from './Screens/Submit Ad/SubmitAd';


class App extends React.Component {

    state = {
        
    }

    render() {

        return (

            <React.Fragment>

                        <Navbar/>
                
            </React.Fragment>
        )
    }
}

export default App;