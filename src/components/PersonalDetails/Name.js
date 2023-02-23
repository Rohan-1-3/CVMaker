import React, { Component } from 'react';

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname : "",
            middlename: "",
            lastname: ""
        }
    }

    firstNameRender = (e)=>{
        this.setState({
            firstname : e.target.value 
        },
        this.componentDidMount
        )
    }

    middleNameRender =(e)=>{
        this.setState({
            middlename : e.target.value 
        },
        this.componentDidMount
        )
        
    }

    lastNameRender = (e)=>{
        this.setState({
            lastname : e.target.value 
        },
        this.componentDidMount
        )
    }

    componentDidMount(){
        this.props.handleName(this.state)
    }

    render() {
        return (
            <div className='name'>
                <label htmlFor='firstname'>First Name:</label>
                <input value={this.state.firstname} onChange={this.firstNameRender} type="text"/>

                <label htmlFor='middlename'>Middle Name:</label>
                <input value={this.state.middlename} onChange={this.middleNameRender} type="text"/>

                <label htmlFor='lastname'>Last Name:</label>
                <input value={this.state.lastname} onChange={this.lastNameRender} type="text"/>
            </div>
        );
    }
}

export default Name;