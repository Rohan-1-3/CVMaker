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

            interest : [],
            handles : []
        }
        // binding the methods for children to use
        this.handleName = this.handleName.bind(this)
        this.handlePDetails = this.handlePDetails.bind(this)
        this.handleContacts = this.handleContacts.bind(this)
        this.handleInterests = this.handleInterests.bind(this)
        this.handleHandles = this.handleHandles.bind(this)
    }

    handleName(nameInput){
        this.setState({// sets new/updated Name
            name : nameInput
        })
    }

    handlePDetails(PDetails){
        this.setState({// sets new/updated Personal Details
            pDetails : PDetails
        })
    }

    handleContacts(contact){
        this.setState({// sets new/updated Contacts
            contacts : contact
        })
    }

    handleInterests(interests){
        this.setState({// sets new/updated interests
            interest : interests
        })
    }

    handleHandles(handle){
        this.setState({// sets new/updated socia;s
            handles : handle
        })
    }
    
    handleFormSubmit(){// checking data transfer
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
                        handleInterests = {this.handleInterests}
                        handleHandles = {this.handleHandles}/>
               <button >Submit</button>
            </form>
        );
    }
}

export default Form;