import React, { Component } from 'react';
import yearSelect from './Year';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingMode : false,// for button to level select
            selected: false,// for select to form
            form : {
                name : "",
                level : "",
                subject: "",
                joined: `${new Date().getFullYear()}`,// current year
                passed: "",
            },
            educationArr : []// all the levels education to be added in this array
        }
    }
    
    adddingModeOn = ()=>{
        this.setState({// button pressed
            addingMode : true
        })
    }

    // methods for updating the form details
    formNameUpdate=(e)=>{
        this.setState({
            form : {
                name : e.target.value,
                level : this.state.form.level,
                subject: this.state.form.subject,
                joined: this.state.form.joined,
                passed: this.state.form.passed,
            },
        })
    }
    
    formSubjectUpdate=(e)=>{
        this.setState({
            form : {
                name : this.state.form.name,
                level : this.state.form.level,
                subject: e.target.value,
                joined: this.state.form.joined,
                passed: this.state.form.passed
            },
        })
    }

    formJoinedUpdate=(e)=>{
        this.setState({
            form : {
                name : this.state.form.name,
                level : this.state.form.level,
                subject: this.state.form.subject,
                joined: e.target.value,
                passed: this.state.form.passed,
            },
        })
    }

    formPassedUpdate=(e)=>{
        this.setState({
            form : {
                name : this.state.form.name,
                level : this.state.form.level,
                subject: this.state.form.subject,
                joined: this.state.form.joined,
                passed: e.target.value,
            },
        })
    }

    optionSelection = (e)=>{
        this.setState({
            form : {
                name : this.state.form.name,
                level : e.target.value,
                subject: this.state.form.subject,
                joined: this.state.form.joined,
                passed: this.state.form.passed,
            },
            selected : true
        })
    }
    // form details handling ends here

    // adding and editing the education details happen here
    editHandle= ()=>{
        this.state.educationArr.push(this.state.form)
        this.setState({// resets form
            addingMode : false,
            selected: false,
            form : {
                name : `${new Date().getFullYear()}`,
                level : "",
                subject: "",
                joined: "",
                passed: "",
            },
        },
        this.componentDidMount// sends data to main state
        )
        console.log(this.state)
    }

    formSubmitHanlde = ()=>{
       this.setState({// for editing removes prev and lauches function for the edited one
        educationArr : this.state.educationArr.filter(x=>(x.level !== this.state.form.level))
       },
       this.editHandle
       ) 
       
    }

    deleteEducation = (level)=>{
        this.setState({// filters in all except deleted one
            educationArr : this.state.educationArr.filter(x => (x.level !== level))
        },
        this.componentDidMount
        )
    }

    componentDidMount(){
        this.props.handleEducation(this.state.educationArr)
    }

    render() {
        const schoolDisplay = this.state.educationArr.map(x=>{
            return(
                <div className='education-list'>
                    <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                    <label>{x.name}</label>
                    <br/>
                    {x.level}, {x.subject}, {x.joined} - {x.passed}
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                        alt='cross' onClick={()=>this.deleteEducation(x.level)}/>
                </div>
            )
        })
        const form = this.state.form;
        const levelsList = (<select onChange={this.optionSelection}>
            <option>Select </option>
            <option value="DLE & SLC">DLE & SLC</option>
            <option value="DLE & SEE">DLE & SEE</option>
            <option value="+2 Level">+2 Level</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
        </select>)
        if(this.state.addingMode){
            if(!this.state.selected){
                return(
                    <div>
                        {levelsList}
                        {schoolDisplay}
                    </div>
                )
            }else{
                return (
                    <div className='education'>
                        <label>Education</label>
                        <label htmlFor='school-name'>Institute Name:</label>
                        <input value={form.name} onChange={this.formNameUpdate}/>
        
                        <label htmlFor='subject'>Subject/Course:</label>
                        <input value={form.subject} onChange={this.formSubjectUpdate}/>
        
                        <label htmlFor='joined'>Joined Year:</label>
                        <select onChange={this.formJoinedUpdate}>
                            {yearSelect}
                        </select>
        
                        <label htmlFor='passed'>Passed Year:</label>
                        <select onChange={this.formPassedUpdate}>
                            {yearSelect}
                        </select>
        
                        <button onClick={this.formSubmitHanlde}>Submit Information</button>
                        {schoolDisplay}
                    </div>
                );
            }
        
    }else{
        return (
            <div className='education'>
                <label>Education</label>        
                <button onClick={this.adddingModeOn}>Add Level</button>
                {schoolDisplay}
            </div>
        )
    }
}
}

export default Education;