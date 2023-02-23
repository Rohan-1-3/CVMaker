import React, { Component } from 'react';

class Handles extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='handles'>
                    <select value={"github"}>
                        <option value="Github">Github</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                    </select>
                </div>
                <div className='interest'>
                    <button>Add</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Handles;