import React, { Component } from 'react';
import Github from "../images/2c3ed42168e196f2bde5.png"
import Form from './Form';

class InitialDesign extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <main>
                    <Form />
                </main>
                <footer>
                    <span>Created By: rohan-1-3</span>
                    <a href={this.props.href}>
                        <img src={Github} alt="img" target="_blank"/>
                    </a>
                </footer>
            </React.Fragment>
        );
    }
}

export default InitialDesign;