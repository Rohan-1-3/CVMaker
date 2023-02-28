import React, { useEffect, useState } from 'react';
import yearSelect from './Year';

function Education({handleEducation}) {
    const [addingMode, setAddingMode] = useState(false);
    const [selected, setSelected] = useState(false);
    const [form, setForm] = useState({
        name : "",
        level : "",
        subject: "",
        joined: `${new Date().getFullYear()}`,// current year
        passed: "",
    });
    const [educationArr,  setEducationArr] = useState([]);

    useEffect(()=>{
        handleEducation(educationArr)
    }, [educationArr, handleEducation])

    

    const adddingModeOn = ()=>{
        setAddingMode(true)
    }

    // methods for updating the form details
    const formNameUpdate=(e)=>{
        setForm({...form, name: e.target.value})
    }
    
    const formSubjectUpdate=(e)=>{
        setForm({...form, subject : e.target.value})
    }

    const formJoinedUpdate=(e)=>{
        setForm({...form, joined : e.target.value})
    }

    const formPassedUpdate=(e)=>{
        setForm({...form, passed : e.target.value})
    }

    const optionSelection = (e)=>{
        setForm({...form, level : e.target.value})
        setSelected(true)
    }
    // form details handling ends here


    const formSubmitHanlde = ()=>{
       setEducationArr(educationArr.filter(x=>(x.level !== form.level)))
       setEducationArr(prevArr => [...prevArr, form])
        setAddingMode(false)
        setSelected(false)
        setForm({
            name : "",
            level : "",
            subject: "",
            joined: `${new Date().getFullYear()}`,
            passed: "",
        })
    }

    const deleteEducation = (level)=>{
        setEducationArr(educationArr.filter(x => (x.level !== level)))
    }
    const schoolDisplay = educationArr.map(x=>{
            return(
                <div className='education-list' key={x.level}>
                    <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                    <label>{x.name}</label>
                    <br/>
                    {x.level}, {x.subject}, {x.joined} - {x.passed}
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                        alt='cross' onClick={()=>deleteEducation(x.level)}/>
                </div>
            )
        })
        const levelsList = (<select onChange={optionSelection}>
            <option>Select </option>
            <option value="DLE & SLC">DLE & SLC</option>
            <option value="DLE & SEE">DLE & SEE</option>
            <option value="+2 Level">+2 Level</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
        </select>)
        if(addingMode){
            if(!selected){
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
                        <input value={form.name} onChange={formNameUpdate}/>
        
                        <label htmlFor='subject'>Subject/Course:</label>
                        <input value={form.subject} onChange={formSubjectUpdate}/>
        
                        <label htmlFor='joined'>Joined Year:</label>
                        <select onChange={formJoinedUpdate}>
                            {yearSelect}
                        </select>
        
                        <label htmlFor='passed'>Passed Year:</label>
                        <select onChange={formPassedUpdate}>
                            {yearSelect}
                        </select>
        
                        <button onClick={formSubmitHanlde}>Submit Information</button>
                        {schoolDisplay}
                    </div>
                );
            }
        
    }else{
        return (
            <div className='education'>
                <label>Education</label>        
                <button onClick={adddingModeOn}>Add Level</button>
                {schoolDisplay}
            </div>
        )
    }

}

export default Education;