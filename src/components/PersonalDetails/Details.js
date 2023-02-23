import React, { Component } from 'react';
import Name from './Name';
import PDetails from './PDetails';
import Contacts from './Contacts';
import Handles from './Handles';

class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <Name handleName = {this.props.handleName}/>
                <PDetails handlePDetails = {this.props.handlePDetails}/>
                <Contacts handleContacts = {this.props.handleContacts}/>
                <Handles/>
            </React.Fragment>
        );
    }
}

export default Details;