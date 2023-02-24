import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingMode : false,
            inputDisplay : "",
            skillsArr : [],
        }
    }
    
    addingModeOn =()=>{
        this.setState({
            addingMode : true
        })
    }
    
    inputDisplay = (e)=>{
        this.setState({
            inputDisplay : e.target.value
        })
    }

    onSubmit = ()=>{
        this.state.skillsArr.push(this.state.inputDisplay)
        this.setState({
            addingMode : false,
            inputDisplay : "",
        },
        this.componentDidMount
        )
    }

    deleteSkills = (skill)=>{
        this.setState({// filters in all except deleted one
            skillsArr : this.state.skillsArr.filter(x => (x !== skill))
        },
        this.componentDidMount
        )
    }    

    componentDidMount(){
        this.props.handleSkills(this.state.skillsArr)
    }

    render() {
        const skills = this.state.skillsArr.map(x=>{
            return(
                <div key={x} className="skills-list">
                    <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                    {x}
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                     alt='cross' onClick={()=>this.deleteSkills(x)}/>
                </div>
            )
        })
        if(this.state.addingMode){
        return (
            <div>
                <label>Skills</label>
                <input value={this.state.inputDisplay} onChange={this.inputDisplay}/>
                <button onClick={this.onSubmit}>Add Skill</button>
                {skills}
            </div>
        );
    }else{
        return(
            <div>
                <label>Skills</label>
                <button onClick={this.addingModeOn}>Add Skills</button>
                {skills}
            </div>
        )
    }
    }
}

export default Skills;