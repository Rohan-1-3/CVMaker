import React, { Component } from 'react';
import yearSelect from './Year';
import uniqid from "uniqid"

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingMode : false,
            form : {
                id: uniqid(),
                name : "",
                post : "",
                joined: `${new Date().getFullYear()}`,// current year
                left: "",
            },
            workArr : []
        }
    }

    addingModeOn=()=>{
        this.setState({
            addingMode : true
        })
    }

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

    editHandle = ()=>{
        console.log(this.state)
    }

    formSubmitHanlde = ()=>{
        this.state.workArr.push(this.state.form);
        this.setState({
            addingMode : false,
            form : {
                id: uniqid(),
                name : "",
                post : "",
                joined: `${new Date().getFullYear()}`,// current year
                left: "",
            },
        },
        this.editHandle,
        this.componentDidMount)
    }

    deleteWork = (id)=>{
        this.setState({
            workArr : this.state.workArr.filter(x => x.id !== id)
        },
        this.componentDidMount)
    }

    componentDidMount(){
        this.props.handleWork(this.state.workArr)
    }
    
    render() {
        const workDisplay = this.state.workArr.map(x=>{
            return(
                <div className='work-list'>
                <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                <label>{x.name}</label>
                <br/>
                {x.post}, {x.joined} - {x.left}
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                    alt='cross' onClick={()=>this.deleteWork(x.id)}/>
                <img  onClick={()=>this.editButton()}
                    src='https://cdn-icons-png.flaticon.com/512/1827/1827951.png' 
                    alt='cross'/>
                </div>
            )
        })

        const form = this.state.form
        if(!this.state.addingMode){
            return (
                <div>
                    <label>Work Experience</label>
                    <button onClick={this.addingModeOn}>Add New Work Experience</button>
                    {workDisplay}
                </div>
            );
        }else{
            
            return(
                <div>
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