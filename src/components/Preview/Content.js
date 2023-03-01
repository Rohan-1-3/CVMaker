import React from 'react';
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import address from "../../images/address.png";

function Content({state, arrow}) {

    const educationList = state.educationsArr.map(x =>{
        return(
            <div className='education-display'>
                <h3>{x.name}</h3>
                {x.level}, {x.subject}, {x.joined} - {x.passed}
            </div>
        )
    })

    const handles = state.handles.map(x => {
        return (// displaying all the handles added
            <div key={x.handle} className='handle'>
                <img src={x.imgSrc} alt={x.handle}/>
                {x.name}
            </div>
        )
    })

    return (
        <React.Fragment>
            <div className='descp'>
                <h1><img src={arrow} alt=""/>Profile</h1>
                <h2>{state.pDetails.description}</h2>
            </div>
            
            <div className='Education'>
                <h1><img src={arrow} alt=""/>Education</h1>
                {educationList}
            </div>

            <div className='contacts'>
                <h1><img src={arrow} alt=""/>Contacts</h1>
                <div className='contact'>
                    <img src={phone}
                    alt=''/> {state.contacts.number} <br/>
                    <img src={mail}
                    alt=''/> {state.contacts.email}<br/>
                    <img src={address}
                    alt=''/> {state.contacts.address}
                    <br/>
                </div>
                <div className='handle'>
                    {handles}
                </div>
            </div>
        </React.Fragment>
    );

}

export default Content;