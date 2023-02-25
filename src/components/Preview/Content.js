import React, { Component } from 'react';

class Content extends Component {
    render() {
        const props = this.props.state
        const educationList = props.educationsArr.map(x =>{
            return(
                <React.Fragment>
                    <h3>{x.name}</h3>
                    {x.level}, {x.subject}, {x.joined} - {x.passed}
                </React.Fragment>
            )
        })

        const handles = props.handles.map(x => {
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
                    <h2>Profile:</h2>
                    <p>{props.pDetails.description}</p>
                </div>
                
                <div className='Education'>
                    <h2>Education:</h2>
                    {educationList}
                </div>

                <div className='contacts'>
                    <h2>Contacts:</h2>
                    <img src='https://cdn-icons-png.flaticon.com/512/5068/5068731.png' alt=''/> {props.contacts.number} <br/>
                    <img src='https://cdn-icons-png.flaticon.com/512/666/666162.png' alt=''/> {props.contacts.email}<br/>
                    <img src='https://icons.veryicon.com/png/o/miscellaneous/icon_1/address-60.png' alt=''/> {props.contacts.address}
                    <br></br>
                    {handles}
                </div>
            </React.Fragment>
        );
    }
}

export default Content;