import React, { Component } from 'react';

class Handles extends Component {
    render() {
        return (
            <div>
            <select value={"github"}>
                <option value="Github">Github</option>
                <option value="Twitter">Twitter</option>
                <option value="Instagram">Instagram</option>
            </select>
            </div>
        );
    }
}

export default Handles;