import React, { useEffect, useState } from 'react';
import DisableButtons, { EnableButtons } from '../DisableButtonsDOM';
import Github from "../../images/github.png";
import Twitter from "../../images/twitter.png";

function Handles({handleHandles}) {
    const [inserting, setInserting] = useState(false);
    const [selected, setSelected] = useState(false);
    const [socialName, setSocialName] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [socials, setSocials] = useState([]);
    const [initialSocials, setInitialSocials] = useState([
        {// helps to edit and for image
        handle : "Github",
        imgSrc : Github,
        name : ""
    }, {
        handle : "Instagram",
        imgSrc : "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
        name : ""
    },{
        handle : "Twitter",
        imgSrc : Twitter,
        name : ""
    }
])

    useEffect(()=>{
        handleHandles(socials)
    }, [socials, handleHandles])

    const addSocialButton=()=>{
        DisableButtons();
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
        EnableButtons()
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