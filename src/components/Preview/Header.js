import React, { Component } from 'react';

class Header extends Component {
    render() {
        const props= this.props.state
        return (
            <React.Fragment>
                <div className='display-picture'>
                        <img src={props.pDetails.imageSrc} alt=''/>
                    </div>
                    <div className='name'>
                        <h1>{props.name.firstname} {props.name.middlename}</h1>
                        <h1>{props.name.lastname}</h1>
                        <p>{props.pDetails.profession}</p>
                    </div>
            </React.Fragment>
        );
    }
}

export default Header;