import React, { Component } from 'react';
import Details from './PersonalDetails/Details';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : {
                firstname : "",
                middlename : "",
                lastname : ""
            }
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
    }

    handleName(nameInput){
        this.setState({
            name : nameInput
        })
    }
    
    handleFormSubmit(){
        console.log(this.state)
    }

    render() {
        return (
            <form>
               <Details handleName = {this.handleName}/>
               <button onClick={(e)=>{
                e.preventDefault()
                this.handleFormSubmit()
               }}>Submit</button>
            </form>
        );
    }
}

export default Form;