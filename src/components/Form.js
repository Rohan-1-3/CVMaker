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
            },

            pDetails : {
                imageSrc : "",
                description : "",
                profession : "" 
            },

            contacts : {
                number : "",
                email : "",
                address: ""
            },

            interest : []
        }

        this.handleName = this.handleName.bind(this)
        this.handlePDetails = this.handlePDetails.bind(this)
        this.handleContacts = this.handleContacts.bind(this)
        this.handleInterests = this.handleInterests.bind(this)
    }

    handleName(nameInput){
        this.setState({
            name : nameInput
        })
    }

    handlePDetails(PDetails){
        this.setState({
            pDetails : PDetails
        })
    }

    handleContacts(contact){
        this.setState({
            contacts : contact
        })
    }

    handleInterests(interests){
        this.setState({
            interest : interests
        })
    }
    
    handleFormSubmit(){
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.handleFormSubmit()}}>
               <Details handleName = {this.handleName}
                        handlePDetails = {this.handlePDetails}
                        handleContacts = {this.handleContacts}
                        handleInterests = {this.handleInterests}/>
               <button >Submit</button>
            </form>
        );
    }
}

export default Form;