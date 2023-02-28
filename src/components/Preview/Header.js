import React from 'react';

function Header({state}) {
    return (
        <React.Fragment>
            <div className='display-picture'>
                    <img src={state.pDetails.imageSrc} alt=''/>
                </div>
                <div className='name'>
                    <h1>{state.name.firstname} {state.name.middlename}</h1>
                    <h1>{state.name.lastname}</h1>
                    <p>{state.pDetails.profession}</p>
                </div>
        </React.Fragment>
    );
}

export default Header;
