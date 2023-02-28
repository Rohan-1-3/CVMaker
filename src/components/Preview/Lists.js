import React from 'react';

function Lists({name, list}) {
    const lists = list.map(x => <li key={x}>{x}</li>)
    return (
        <div className={name}>
            <h2>{name}</h2>
            <ul>{lists}</ul>
        </div>
    );
}

export default Lists;