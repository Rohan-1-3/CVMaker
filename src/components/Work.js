import React, { useEffect, useState } from 'react';
import yearSelect from './Year';
import uniqid from "uniqid"
import DisableButtons, { EnableButtons } from './DisableButtonsDOM';

function Work({handleWork}) {
    const [addingMode, setAddingMode] = useState(false);
    const [form, setForm] = useState({
        id: uniqid(),
        name : "",
        post : "",
        joined: `${new Date().getFullYear()}`,// current year
        left: "",
    })
    const [workArr, setWorkArr] = useState([]);

    useEffect(()=>{
        handleWork(workArr)
    }, [workArr, handleWork])

    const addingModeOn=()=>{
        DisableButtons()
        setAddingMode(true)
    }
    // methods for updating state and display..
    const formNameUpdate = (e)=>{
        setForm({...form, name : e.target.value})
    }

    const formCompanyUpdate = (e)=>{
        setForm({...form, post : e.target.value})
    }

    const formJoinedUpdate = (e)=>{
        setForm({...form, joined : e.target.value})
    }

    const formleftUpdate = (e)=>{
        setForm({...form, left : e.target.value})
    }
    // ...ending of methods

    const formSubmitHanlde = ()=>{
        EnableButtons()
        setWorkArr([...workArr, form])
        setAddingMode(false)
        setForm({
            id: uniqid(),
            name : "",
            post : "",
            joined: `${new Date().getFullYear()}`,// current year
            left: "",
        })
    }

    const deleteWork = (id)=>{
        setWorkArr(workArr.filter(x => x.id !== id))
    }

    const workDisplay = workArr.map(x=>{// has display for all the experience 
        return(
            <div className='work-list'>
                <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                <label>{x.name}</label>
                <br/>
                {x.post}, {x.joined} - {x.left}
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                    alt='cross' onClick={()=>deleteWork(x.id)}/>
            </div>
        )
    })

    if(!addingMode){// adding button
        return (
            <div className='work-experience'>
                <label>Work Experience</label>
                <button onClick={addingModeOn}>Add New Work Experience</button>
                {workDisplay}
            </div>
        );
    }else{
        return(// form for work experience
            <div className='work-experience'>
                <label>Work Experience</label>
                <input value={form.name} onChange={formNameUpdate} placeholder="Company Name"/>

                <input value={form.post} onChange={formCompanyUpdate} placeholder="Post/ Position" />

                <select onChange={formJoinedUpdate}>
                    <option>Select Joined Year</option>
                    {yearSelect}
                </select>

                <select onChange={formleftUpdate}>
                    <option>Select Left Year</option>
                    {yearSelect}
                </select>

                <button onClick={formSubmitHanlde}>Submit Information</button>
                {workDisplay}
            </div>
        )
    }

}

export default Work;