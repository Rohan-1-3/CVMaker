import React, { useEffect, useState } from 'react';

function Handles({handleHandles}) {
    const [inserting, setInserting] = useState(false);
    const [selected, setSelected] = useState(false);
    const [socialName, setSocialName] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [socials, setSocials] = useState([]);
    const [initialSocials, setInitialSocials] = useState([
        {// helps to edit and for image
        handle : "Github",
        imgSrc : "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
        name : ""
    }, {
        handle : "Instagram",
        imgSrc : "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
        name : ""
    },{
        handle : "Twitter",
        imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png",
        name : ""
    }
])

    useEffect(()=>{
        handleHandles(socials)
    }, [socials, handleHandles])

    const addSocialButton=()=>{
        setInserting(true)
    }

    const optionSelection = (e)=>{
        setSelected(true)
        setSocialName(e.target.value)
    }

    const handleInput=(e)=>{
        setInputValue(e.target.value)
        console.log({socialName, inputValue, initialSocials, socials})
    }

    const addingSocial = ()=>{
        initialSocials.map(x => (x.handle === socialName) 
            ? x.name = inputValue : x)
        const handleTitle = socials.map(x=> x.handle)
        initialSocials.map(x => (x.name !== "" && !handleTitle.includes(x.handle)) ? 
        setSocials(prevArray => [...prevArray, x]) : 0)
        // resetting and re-rendering
        setInserting(false)
        setSelected(false)
        setSocialName("")
        setInputValue("")
    }

    const deletingSocial=(handle)=>{
        setSocials(socials.filter(x => x.handle !== handle))
    }

    const options = (
                <select onChange={optionSelection}>
                    <option>Select </option>
                    <option value="Github">Github</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                </select>
            )

    const handles = socials.map(x => {
        return (// displaying all the handles added
            <div key={x.handle} className='handle-display'>
                <img src={x.imgSrc} alt={x.handle}/>
                {x.name}
                <button onClick={()=>deletingSocial(x.handle)}>
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png' 
                        alt='img'/>
                </button>
            </div>
        )
        })

    if(inserting){
        if(selected){
            return (// form for handle and display all handles
                <div className='handles'>
                    <label>Handles</label>
                    <label>{socialName}:</label>
                    <input value={inputValue} onChange={handleInput}/>
                    <button onClick={addingSocial}>Submit</button>
                    {handles}
                </div>
            )
        }
        else{
            return(// options of hanldes and display handles
                <div className='handles'>
                    <label>Handles</label>
                    {options}
                    {handles}
                </div>  
            )
        }
    }
    return (// Button to add and edit and the handles display
        <div className='handles'>
            <label>Handles</label>
            <button onClick={addSocialButton}>Add/Edit Social Handle</button>
            {handles}
        </div>
    );
}

export default Handles;

// import React, { Component } from 'react';

// class Handles extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inserting : false,// changes button to select when true
//             selected: false,// changes select to form when true
//             socialName: "",// name of selected media
//             inputValue : "",// input of handle name

            // initialSocials : [{// helps to edit and for image
            //     handle : "Github",
            //     imgSrc : "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
            //     name : ""
            // }, {
            //     handle : "Instagram",
            //     imgSrc : "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
            //     name : ""
            // },{
            //     handle : "Twitter",
            //     imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png",
            //     name : ""
            // }],

//             socials : []// inserting the handles which are valid
//         }
//     }

    // addSocialButton=()=>{
    //     this.setState({
    //         inserting : true// button to select
    //     })
    // }

    // optionSelection = (e)=>{
    //     this.setState({
    //         selected : true,// select to input
    //         socialName : e.target.value
    //     })
    // }
    
    // handleInput=(e)=>{
    //     this.setState({// update input display
    //         inputValue : e.target.value
    //     })
    // }

    // addingSocial = ()=>{
    //     // direct changing name of respective handle
    //     this.state.initialSocials.map(x => (x.handle === this.state.socialName) 
    //     ? x.name = this.state.inputValue : 0)
    //     // direct pushing valid handles 
    //     this.state.initialSocials.map(x => (x.name !== "" 
    //     && !this.state.socials.includes(x)) ? this.state.socials.push(x) : 0)
    //     // resetting and re-rendering
    //     this.setState({
    //         inserting : false,
    //         selected: false,
    //         socialName: "",
    //         inputValue : "",
    //         socials : this.state.socials
    //     },
    //     this.componentDidMount)
    // }

    // deletingSocial=(handle)=>{
    //     this.setState({// filtering in all the handles except the deleted one
    //         socials : this.state.socials.filter(x => x.handle !== handle)
    //     },
    //     this.componentDidMount
    //     )
    // }

//     componentDidMount(){
//         this.props.handleHandles(this.state.socials)
//     }

//     render() {
//         const options = (
//                 <select onChange={this.optionSelection}>
//                     <option>Select </option>
//                     <option value="Github">Github</option>
//                     <option value="Twitter">Twitter</option>
//                     <option value="Instagram">Instagram</option>
//                 </select>
//             )
//         const handles = this.state.socials.map(x => {
//             return (// displaying all the handles added
//                 <div key={x.handle} className='handle-display'>
//                     <img src={x.imgSrc} alt={x.handle}/>
//                     {x.name}
//                     <button onClick={()=>this.deletingSocial(x.handle)}>
//                     <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png' 
//                          alt='img'/>
//                     </button>
//                 </div>
//             )
//         })
//         if(this.state.inserting){
//             if(this.state.selected){
//                 return (// form for handle and display all handles
//                     <div className='handles'>
//                     <label>Handles</label>
//                         <label>{this.state.socialName}:</label>
//                         <input value={this.state.inputValue} onChange={this.handleInput}/>
//                         <button onClick={this.addingSocial}>Submit</button>
//                         {handles}
//                     </div>
//                 )
//             }
//             else{
//                 return(// options of hanldes and display handles
//                     <div className='handles'>
//                     <label>Handles</label>
//                         {options}
//                         {handles}
//                     </div>
                    
//                 )
//             }
//         }
//         return (// Button to add and edit and the handles display
//             <div className='handles'>
//             <label>Handles</label>
//                 <button onClick={this.addSocialButton}>Add/Edit Social Handle</button>
//                 {handles}
//             </div>
//         );
//     }
// }

// export default Handles;