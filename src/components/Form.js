import React, { Component } from 'react';
import Education from './Education';
import Details from './PersonalDetails/Details';
import Skills from './Skills';
import Work from './Work';
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
            handles : [],
            educationsArr : [],
            skills :[],
            works : []
        }
        // binding the methods for children to use
        this.handleName = this.handleName.bind(this)
        this.handlePDetails = this.handlePDetails.bind(this)
        this.handleContacts = this.handleContacts.bind(this)
        this.handleInterests = this.handleInterests.bind(this)
        this.handleHandles = this.handleHandles.bind(this)
        this.handleEducation = this.handleEducation.bind(this)
        this.handleSkills = this.handleSkills.bind(this)
        this.handleWork = this.handleWork.bind(this)
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

    handleEducation(education){
        this.setState({
            educationsArr : education
        })
    }

    handleSkills(skill){
        this.setState({
            skills : skill
        })
    }
    
    handleWork(work){
        this.setState({
            works : work
        })
    }

    handleFormSubmit(){// checking data transfer
        console.log(this.state)
    }

    render() {
        return (
            <form className='my-form' onSubmit={(e)=>{
                e.preventDefault()
                this.handleFormSubmit()}}>
               <Details handleName = {this.handleName}
                        handlePDetails = {this.handlePDetails}
                        handleContacts = {this.handleContacts}
                        handleInterests = {this.handleInterests}
                        handleHandles = {this.handleHandles}/>
                <Education handleEducation = {this.handleEducation}/>
                <Skills handleSkills={this.handleSkills}/>
                <Work handleWork={this.handleWork}/>
               <button >Submit</button>
            </form>
        );
    }
}

export default Form;