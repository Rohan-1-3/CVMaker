import React, { Component } from 'react';
import Education from './Education';
import Details from './PersonalDetails/Details';
import MainPreview from './Preview/MainPreview';
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

    componentDidMount(){
        const submitForm = document.querySelector(".preview-btn");
        const previewDiv = document.querySelector(".preview");
        submitForm.addEventListener("click", ()=>{
            previewDiv.classList.remove("hide")
            previewDiv.classList.add("show")
        })
    }

    render() {
        return (
            <React.Fragment> 
                <div id='container'>
                    <form className='my-form' onSubmit={(e)=>{
                        e.preventDefault()}}>
                    <Details handleName = {this.handleName}
                                handlePDetails = {this.handlePDetails}
                                handleContacts = {this.handleContacts}
                                handleInterests = {this.handleInterests}
                                handleHandles = {this.handleHandles}/>
                        <Education handleEducation = {this.handleEducation}/>
                        <Skills handleSkills={this.handleSkills}/>
                        <Work handleWork={this.handleWork}/>
                    <button className="preview-btn">Preview</button>
                    </form>
                </div>
                <MainPreview state={this.state}/>
            </React.Fragment>
            
        );
    }
}

export default Form;