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
                <div key={interest.key} className="interest-list">
                <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                    {interest.text}
                    <img  onClick={()=>this.deletingInterests(interest.key)} 
                            src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png' 
                            alt='cross'/>
                    <img  onClick={()=>this.editButton(interest.key, interest.text)}
                            src='https://cdn-icons-png.flaticon.com/512/1827/1827951.png' 
                            alt='cross'/>
                </div>
            )}
            else{// edit mode turns into form
                return (
                    <div key={interest.key}>
                        <input value={this.state.editInput} onChange={this.editInput}/>
                        <img  onClick={()=>this.editingInterests(interest)}
                            src='https://cdn-icons-png.flaticon.com/512/1827/1827951.png' 
                            alt='cross'/>
                    </div>
                )
            }
        })
        if(this.state.addInterests){// adding mode
            return(
                
                <React.Fragment>
                <div className='interest'>
                <label>Interests</label>
                    <input value={this.state.interests.text} onChange={this.handleInterestInput}/>
                    <button onClick={this.interestFormHandle}>Add Interest</button>
                    {renderInterests}
                </div>
                
            </React.Fragment>
            )
        }
        else{// not in adding mode so has a add button
            return (
                <React.Fragment>
                    <div className='interest'>
                    <label>Interests</label>
                        <button onClick={this.addingInterests}>Add Interests</button>
                        {renderInterests}
                    </div>
                    
                </React.Fragment>
            );
        }
    }
}

export default Interest;