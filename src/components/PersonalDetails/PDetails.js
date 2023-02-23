import React, { Component } from 'react';

class PDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc : "",
            description : "",
            profession : "" 
        }
    }
    
    handleImage = (e)=>{
        this.setState({
            imageSrc : URL.createObjectURL(e.target.files[0])
        },
        this.componentDidMount
        )
    }

    handleDescription=(e)=>{
        this.setState({
            description : e.target.value
        },
        this.componentDidMount
        )
    }

    handleProfession=(e)=>{
        this.setState({
            profession : e.target.value
        },
        this.componentDidMount
        )
    }

    componentDidMount(){
        this.props.handlePDetails(this.state)
    }

    render() {
        return (
            <div className='details'>
                <label htmlFor='display-picture'>Display Picture</label>
                <input type="file" accept="image/png, image/jpeg" onInput={this.handleImage}/>

                <label htmlFor='profile'>Personal Profile</label>
                <textarea value={this.state.description} onChange={this.handleDescription}/>

                <label htmlFor='occupation'>Profession:</label>
                <input value={this.state.profession} onChange={this.handleProfession} type="text"/>
            </div>
        );
    }
}

export default PDetails;