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
    
    // methods for updating inputs
    handleImage = (e)=>{
        this.setState({
            imageSrc : URL.createObjectURL(e.target.files[0])// creating a local url of image added by user
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

    componentDidMount(){// sending updated data to main state
        this.props.handlePDetails(this.state)
    }

    render() {
        return (
            <div className='details'>
                <label htmlFor='display-picture'>Display Picture</label>
                <input type="file" accept="image/png, image/jpeg" 
                title='Choose Your Display Picture' onChange={this.handleImage} required/>

                <label htmlFor='profile'>Personal Profile</label>
                <textarea value={this.state.description} onChange={this.handleDescription} 
                minlength="50" maxlength="100" required/>

                <label htmlFor='occupation'>Profession:</label>
                <input value={this.state.profession} onChange={this.handleProfession} 
                minlength="3" maxlength="15" type="text" required/>
            </div>
        );
    }
}

export default PDetails;