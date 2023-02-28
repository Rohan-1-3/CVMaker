import React from 'react';
import Name from './Name';
import PDetails from './PDetails';
import Contacts from './Contacts';
import Interest from "./Interest";
import Handles from './Handles';

function Details({handleName, handlePDetails, handleContacts,handleInterests, handleHandles}) {
    return (
        <React.Fragment>
            <Name handleName = {handleName}/>
            <PDetails handlePDetails = {handlePDetails}/>
            <Contacts handleContacts = {handleContacts}/>
            <Handles handleHandles = {handleHandles}/>
            <Interest handleInterests = {handleInterests}/>
        </React.Fragment>
    );
}

export default Details;