import React, { Component } from 'react';

class Lists extends Component {
    render() {
        console.log(this.props)
        const lists = this.props.list.map(x => <li>{x}</li>)
        return (
            <div className={this.props.name}>
                <h2>{this.props.name}</h2>
                <ul>
                {lists}
                </ul>
            </div>
        );
    }
}

export default Lists;