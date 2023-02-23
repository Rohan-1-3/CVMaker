import React, { Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : "",
            email : "",
            address: ""
        }
    }

    handleNumber = e =>{
        this.setState({
            number : e.target.value
        },
        this.componentDidMount)
    }

    handleEmail = e =>{
        this.setState({
            email : e.target.value
        },
        this.componentDidMount)
    }

    handleAddress = e =>{
        this.setState({
            address : e.target.value
        },
        this.componentDidMount)
    }

    componentDidMount(){
        this.props.handleContacts(this.state)
    }

    render() {
        return (
            <div className='contacts'>
                <label htmlFor='phone'>Phone:</label>
                <input value={this.state.number} onChange={this.handleNumber} type="number"/>

                <label htmlFor='email'>E-mail:</label>
                <input value={this.state.email} onChange={this.handleEmail} type="email"/>

                <label htmlFor='address'>Address:</label>
                <input value={this.state.address} onChange={this.handleAddress}/>
            </div>
        );
    }
}

export default Contacts;