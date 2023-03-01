import React from 'react';
import Github from "../images/github.png"
import Form from './Form';

function InitialDesign({title, href}) {
    return (
        <React.Fragment>
                <header>
                    <h1>{title}</h1>
                </header>
                <main>
                    <Form />
                </main>
                <footer>
                    <span>Created By: rohan-1-3</span>
                    <a href={href} target="_blank" rel="noreferrer" >
                        <img src={Github} alt="img" />
                    </a>
                </footer>
            </React.Fragment>
    );
}

export default InitialDesign;