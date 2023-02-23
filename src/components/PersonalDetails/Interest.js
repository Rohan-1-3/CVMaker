import React, { Component } from 'react';
import uniqid from "uniqid"

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests : {// new interest object
                key: uniqid(),
                isSubmit : true,
                text : ""
            },
            interestsArray : [],// stores all the input interests
            addInterests : false,// helps to change button to form to add interests
            editInput : "",

        }
    }
    
    addingInterests = ()=>{
        this.setState({
            addInterests : true
        })
    }

    deletingInterests = (id)=>{
        this.setState({// filtering in all the interests except the deleted one
            interestsArray : this.state.interestsArray.filter(x => x.key !== id)
        },
        this.componentDidMount
        )
    }

    editButton = (id, text)=>{// updates the button to form
        this.state.interestsArray.map(interest => (interest.key === id) ? interest.isSubmit = false : 0)
        this.setState({
            editInput : text,
            interestsArray : this.state.interestsArray
        })

    }

    editInput = (e)=>{// inputting the value
        this.setState({
            editInput : e.target.value 
        })
    }

    editingInterests = (interest)=>{
        // direct setting changes the value but doesn't re-render the html...
        this.state.interestsArray.map(x => {
            if(x.key === interest.key){// checks each interest then changes one accr to thier key
                x.text = this.state.editInput
                x.isSubmit = true// changes form back to button
            }
            return 0;
        })
        // ... so using setState to re-render
        this.setState({ // ressting the form
            editInput : "",
            interestsArray : this.state.interestsArray
        },
        this.componentDidMount
        )

    }

    handleInterestInput = (e)=>{// updating the input value
        this.setState({
            interests : {
                key: this.state.interests.key,
                isSubmit : true,
                text : e.target.value
            }
        })
    }

    interestFormHandle = (e)=>{// inserts new interest to arr 
        e.preventDefault()
        // only changes no re-render..
        this.state.interestsArray.push(this.state.interests)
        // ..re-renders and resets
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
            if(interest.isSubmit){// display interest only if all are not in edit mode
            return (
                <div key={interest.key}>
                    <li>{interest.text}</li>
                    <button onClick={()=>this.deletingInterests(interest.key)}>Delete</button>
                    <button onClick={()=>this.editButton(interest.key, interest.text)}>Edit</button>
                </div>
            )}
            else{// edit mode turns into form
                return (
                    <div key={interest.key}>
                        <li></li>
                        <input value={this.state.editInput} onChange={this.editInput}/>
                        <button onClick={()=>this.editingInterests(interest)}>Edit</button>
                    </div>
                )
            }
        })
        if(this.state.addInterests){// adding mode
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
        else{// not in adding mode so has a add button
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