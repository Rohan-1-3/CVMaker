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

    // methods for updating inputs 
    firstNameRender = (e)=>{
        this.setState({
            firstname : e.target.value 
        },
        this.componentDidMount// gets called only after the Name.js state is updated
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

    componentDidMount(){// updates the parent state
        this.props.handleName(this.state)
    }

    render() {
        return (
            <div className='name'>
                <label htmlFor='firstname'>First Name:</label>
                <input value={this.state.firstname} onChange={this.firstNameRender} 
                minLength="3" maxLength="15" type="text" required/>

                <label htmlFor='middlename'>Middle Name:</label>
                <input value={this.state.middlename} onChange={this.middleNameRender} type="text"/>

                <label htmlFor='lastname'>Last Name:</label>
                <input value={this.state.lastname} onChange={this.lastNameRender} type="text" 
                minLength="3" maxLength="15" required/>
            </div>
        );
    }
}

export default Name;