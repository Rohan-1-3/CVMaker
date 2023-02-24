import React, { Component } from 'react';
import yearSelect from './Year';
import uniqid from "uniqid"

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingMode : false,// button to form when true
            form : {
                id: uniqid(),
                name : "",
                post : "",
                joined: `${new Date().getFullYear()}`,// current year
                left: "",
            },
            workArr : []// stores all the work experience
        }
    }

    addingModeOn=()=>{
        this.setState({
            addingMode : true
        })
    }
    // methods for updating state and display..
    formNameUpdate = (e)=>{
        this.setState({
            form : {
                id: this.state.form.id,
                name : e.target.value,
                post : this.state.form.post,
                joined: this.state.form.joined,// current year
                left: this.state.form.left,
            }
        })
    }

    formCompanyUpdate = (e)=>{
        this.setState({
            form : {
                id: this.state.form.id,
                name : this.state.form.name,
                post : e.target.value,
                joined: this.state.form.joined,// current year
                left: this.state.form.left,
            }
        })
    }

    formJoinedUpdate = (e)=>{
        this.setState({
            form : {
                id: this.state.form.id,
                name : this.state.form.name,
                post : this.state.form.post,
                joined: e.target.value,// current year
                left: this.state.form.left,
            }
        })
    }

    formleftUpdate = (e)=>{
        this.setState({
            form : {
                id: this.state.form.id,
                name : this.state.form.name,
                post : this.state.form.post,
                joined: this.state.form.joined,// current year
                left: e.target.value,
            }
        })
    }
    // ...ending of methods

    formSubmitHanlde = ()=>{
        this.state.workArr.push(this.state.form);// direct changing the array
        this.setState({// resets the form
            addingMode : false,
            form : {
                id: uniqid(),
                name : "",
                post : "",
                joined: `${new Date().getFullYear()}`,// current year
                left: "",
            },
        },
        this.componentDidMount)// sending data to main state
    }

    deleteWork = (id)=>{
        this.setState({// filters in all except the one deleted
            workArr : this.state.workArr.filter(x => x.id !== id)
        },
        this.componentDidMount)// send data to main state
    }

    componentDidMount(){
        this.props.handleWork(this.state.workArr)
    }
    
    render() {
        const workDisplay = this.state.workArr.map(x=>{// has display for all the experience 
            return(
                <div className='work-list'>
                    <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                    <label>{x.name}</label>
                    <br/>
                    {x.post}, {x.joined} - {x.left}
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                        alt='cross' onClick={()=>this.deleteWork(x.id)}/>
                </div>
            )
        })

        const form = this.state.form
        if(!this.state.addingMode){// adding button
            return (
                <div className='work-experience'>
                    <label>Work Experience</label>
                    <button onClick={this.addingModeOn}>Add New Work Experience</button>
                    {workDisplay}
                </div>
            );
        }else{
            
            return(// form for work experience
                <div className='work-form'>
                    <label>Work Experience</label>
                    <label htmlFor='company-name'>Company Name:</label>
                    <input value={form.name} onChange={this.formNameUpdate}/>

                    <label htmlFor='subject'>Post/ Position:</label>
                    <input value={form.post} onChange={this.formCompanyUpdate}/>

                    <label htmlFor='joined'>Joined Year:</label>
                    <select onChange={this.formJoinedUpdate}>
                        {yearSelect}
                    </select>

                    <label htmlFor='left'>left Year:</label>
                    <select onChange={this.formleftUpdate}>
                        {yearSelect}
                    </select>

                    <button onClick={this.formSubmitHanlde}>Submit Information</button>
                    {workDisplay}
                </div>
            )
        }
    }
}

export default Work;