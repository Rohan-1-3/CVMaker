import React, { Component } from 'react';
import uniqid from "uniqid"

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests : {
                key: uniqid(),
                isSubmit : true,
                text : ""
            },
            interestsArray : [],
            addInterests : false

        }
    }
    
    addingInterests = ()=>{
        this.setState({
            addInterests : true
        })
    }

    handleInterestInput = (e)=>{
        this.setState({
            interests : {
                key: this.state.interests.key,
                isSubmit : true,
                text : e.target.value
            }
        })
    }

    interestFormHandle = (e)=>{
        e.preventDefault()
        this.state.interestsArray.push(this.state.interests)
        this.setState({
            addInterests : false,
            interests : {
                key: uniqid(),
                isSubmit : true,
                text : ""
            }
        })
        
        console.log(this.state)
    }

    render() {
        const interests = this.state.interestsArray;
        const renderInterests = interests.map(interest => {
            return (
                <div key={interest.key}>
                    <li>{interest.text}</li>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            )
        })
        if(this.state.addInterests){
            return(
                <React.Fragment>
                <div>
                    <input value={this.state.interests.text} onChange={this.handleInterestInput}/>
                    <button onClick={this.interestFormHandle}>Add</button>
                </div>
                <ol>
                    {renderInterests}
                </ol>
            </React.Fragment>
            )
        }
        else{
            return (
                <React.Fragment>
                    <div className='interest'>
                        <button onClick={this.addingInterests}>Add</button>
                    </div>
                    <ol>
                        {renderInterests}
                    </ol>
                </React.Fragment>
            );
        }
    }
}

export default Interest;