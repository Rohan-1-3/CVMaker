import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className='contacts'>
                <label htmlFor='phone'>Phone:</label>
                <input type="number"/>
                <label htmlFor='email'>E-mail:</label>
                <input type="email"/>
                <label htmlFor='address'>Address:</label>
                <input type="text"/>
            </div>
        );
    }
}

export default Contacts;