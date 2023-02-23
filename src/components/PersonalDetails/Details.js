import React, { Component } from 'react';
import Name from './Name';
import PDetails from './PDetails';
import Contacts from './Contacts';
import Handles from './Handles';

class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <Name/>
                <PDetails/>
                <Contacts/>
                <Handles/>
            </React.Fragment>
        );
    }
}

export default Details;