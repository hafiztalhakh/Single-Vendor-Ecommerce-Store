import React from 'react';
import Container from '@material-ui/core/Container';

//Components
import AdsCard from '../../Components/Ads Card/AdsCard'


class LandingPage extends React.Component {

    state = {

    }

    render() {

        return (

            <React.Fragment>
                <br />
                <Container maxWidth="lg">
                    <AdsCard />
                </Container>
            </React.Fragment>
        )
    }
}

export default LandingPage;