import React, { Component } from 'react';
import Name from './Name';
import PDetails from './PDetails';
import Contacts from './Contacts';
import Interest from "./Interest";
import Handles from './Handles';

class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <Name handleName = {this.props.handleName}/>
                <PDetails handlePDetails = {this.props.handlePDetails}/>
                <Contacts handleContacts = {this.props.handleContacts}/>
                <Handles handleHandles = {this.props.handleHandles}/>
                <Interest handleInterests = {this.props.handleInterests}/>
            </React.Fragment>
        );
    }
}

export default Details;