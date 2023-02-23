import React, { Component } from 'react';

class Handles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inserting : false,
            selected: false,
            socialName: "",
            inputValue : "",

            initialSocials : [{
                handle : "Github",
                imgSrc : "",
                name : ""
            }, {
                handle : "Instagram",
                imgSrc : "",
                name : ""
            },{
                handle : "Twitter",
                imgSrc : "",
                name : ""
            }],

            socials : []
        }
    }

    addSocialButton=()=>{
        this.setState({
            inserting : true
        })
    }

    optionSelection = (e)=>{
        this.setState({
            selected : true,
            socialName : e.target.value
        })
    }
    
    handleInput=(e)=>{
        this.setState({
            inputValue : e.target.value
        })
    }

    addingSocial = ()=>{
        this.state.initialSocials.map(x => (x.handle === this.state.socialName) ? x.name = this.state.inputValue : 0)
        this.state.initialSocials.map(x => (x.name !== "" && !this.state.socials.includes(x)) ? this.state.socials.push(x) : 0)
        this.setState({
            inserting : false,
            selected: false,
            socialName: "",
            inputValue : "",
            socials : this.state.socials
        },
        this.componentDidMount)
    }

    deletingSocial=(handle)=>{
        this.setState({
            socials : this.state.socials.filter(x => x.handle !== handle)
        },
        this.componentDidMount
        )
    }

    componentDidMount(){
        this.props.handleHandles(this.state.socials)
    }

    render() {
        const options = (
                <select onChange={this.optionSelection}>
                    <option>Select </option>
                    <option value="Github">Github</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                </select>
            )
        const handles = this.state.socials.map(x => {
            return (
                <div key={x.handle}>
                <img src={x.imgSrc} alt={x.handle}/>
                {x.name}
                <button onClick={()=>this.deletingSocial(x.handle)}>Delete</button>
                </div>
            )
        })
        if(this.state.inserting){
            if(this.state.selected){
                return (
                    <div>
                        <label>{this.state.socialName}:</label>
                        <input value={this.state.inputValue} onChange={this.handleInput}/>
                        <button onClick={this.addingSocial}>Submit</button>

                            {handles}
                    </div>
                )
            }
            else{
                return(
                    <div>
                        {options}

                            {handles}
 
                    </div>
                    
                )
            }
        }
        return (
            <div>
            <button onClick={this.addSocialButton}>Add/Edit Social</button>
            <ol>
            {handles}
            </ol>
            </div>
        );
    }
}

export default Handles;