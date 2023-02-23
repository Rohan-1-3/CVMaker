import React, { Component } from 'react';

class Name extends Component {
    render() {
        return (
            <div className='name'>
                <label htmlFor='firstname'>First Name:</label>
                <input type="text"/>
                <label htmlFor='middlename'>Middle Name:</label>
                <input type="text"/>
                <label htmlFor='lastname'>Last Name:</label>
                <input type="text"/>
            </div>
        );
    }
}

export default Name;