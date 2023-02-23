import React, { Component } from 'react';

class Handles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inserting : false,// changes button to select when true
            selected: false,// changes select to form when true
            socialName: "",// name of selected media
            inputValue : "",// input of handle name

            initialSocials : [{// helps to edit and for image
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

            socials : []// inserting the handles which are valid
        }
    }

    addSocialButton=()=>{
        this.setState({
            inserting : true// button to select
        })
    }

    optionSelection = (e)=>{
        this.setState({
            selected : true,// select to input
            socialName : e.target.value
        })
    }
    
    handleInput=(e)=>{
        this.setState({// update input display
            inputValue : e.target.value
        })
    }

    addingSocial = ()=>{
        // direct changing name of respective handle
        this.state.initialSocials.map(x => (x.handle === this.state.socialName) 
        ? x.name = this.state.inputValue : 0)
        // direct pushing valid handles 
        this.state.initialSocials.map(x => (x.name !== "" 
        && !this.state.socials.includes(x)) ? this.state.socials.push(x) : 0)
        // resetting and re-rendering
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
        this.setState({// filtering in all the handles except the deleted one
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
            return (// displaying all the handles added
                <div key={x.handle}>
                    <img src={x.imgSrc} alt={x.handle}/>
                    {x.name}
                    <button onClick={()=>this.deletingSocial(x.handle)}>Delete</button>
                </div>
            )
        })
        if(this.state.inserting){
            if(this.state.selected){
                return (// form for handle and display all handles
                    <div>
                        <label>{this.state.socialName}:</label>
                        <input value={this.state.inputValue} onChange={this.handleInput}/>
                        <button onClick={this.addingSocial}>Submit</button>
                        {handles}
                    </div>
                )
            }
            else{
                return(// options of hanldes and display handles
                    <div>
                        {options}
                        {handles}
                    </div>
                    
                )
            }
        }
        return (// Button to add and edit and the handles display
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