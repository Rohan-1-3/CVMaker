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
            }
        }

        this.handleName = this.handleName.bind(this)
        this.handlePDetails = this.handlePDetails.bind(this)
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
    
    handleFormSubmit(){
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.handleFormSubmit()}}>
               <Details handleName = {this.handleName}
                        handlePDetails = {this.handlePDetails}/>
               <button >Submit</button>
            </form>
        );
    }
}

export default Form;