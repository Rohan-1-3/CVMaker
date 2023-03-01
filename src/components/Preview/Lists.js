import React from 'react';

function Lists({name, list, arrow}) {
    const lists = list.map(x => <li key={x}>{x}</li>)
    return (
        <div className={name}>
            <h1><img src={arrow} alt=""/>{name}</h1>
            <ul>{lists}</ul>
        </div>
    );
}

export default Lists;