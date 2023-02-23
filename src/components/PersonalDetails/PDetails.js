import React, { Component } from 'react';

class PDetails extends Component {
    render() {
        return (
            <div className='details'>
                <label htmlFor='display-picture'>Display Picture</label>
                <input type="file" accept="image/png, image/jpeg"/>
                <label htmlFor='profile'>Personal Profile</label>
                <textarea/>
                <label htmlFor='occupation'>Profession:</label>
                <input type="text"/>
            </div>
        );
    }
}

export default PDetails;