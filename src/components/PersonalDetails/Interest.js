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
            addInterests : false,
            editInput : "",

        }
    }
    
    addingInterests = ()=>{
        this.setState({
            addInterests : true
        })
    }

    deletingInterests = (id)=>{
        this.setState({
            interestsArray : this.state.interestsArray.filter(x => x.key !== id)
        },
        this.componentDidMount
        )
    }

    editButton = (id, text)=>{
        this.state.interestsArray.map(interest => (interest.key === id) ? interest.isSubmit = false : 0)
        this.setState({
            editInput : text,
            interestsArray : this.state.interestsArray
        })
        console.log(this.state)
    }

    editInput = (e)=>{
        this.setState({
            editInput : e.target.value 
        })
    }

    editingInterests = (interest)=>{
        this.state.interestsArray.map(x => {
            if(x.key === interest.key){
                x.text = this.state.editInput
                x.isSubmit = true
            }
            return 0
        })

        this.setState({
            editInput : "",
            interestsArray : this.state.interestsArray
        },
        this.componentDidMount
        )
        console.log(this.state)
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
        },
        this.componentDidMount
        )
        
    }

    componentDidMount(){
        this.props.handleInterests(this.state.interestsArray)
    }

    render() {
        const interests = this.state.interestsArray;
        const renderInterests = interests.map(interest => {
            if(interest.isSubmit){
            return (
                <div key={interest.key}>
                    <li>{interest.text}</li>
                    <button onClick={()=>this.deletingInterests(interest.key)}>Delete</button>
                    <button onClick={()=>this.editButton(interest.key, interest.text)}>Edit</button>
                </div>
            )}
            else{
                return (
                    <div key={interest.key}>
                        <li></li>
                        <input value={this.state.editInput} onChange={this.editInput}/>
                        <button onClick={()=>this.editingInterests(interest)}>Edit</button>
                    </div>
                )
            }
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