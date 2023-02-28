import React, { useEffect, useState } from 'react';
import DisableButtons, { EnableButtons } from './DisableButtonsDOM';

function Skills({handleSkills}) {
    const [addingMode, setAddingMode] = useState(false);
    const [inputDisplay, setInputDisplay] = useState("");
    const [skillsArr, setSkillsArr] = useState([]);

    useEffect(()=>{
        handleSkills(skillsArr)
    }, [skillsArr, handleSkills])

    const addingModeOn =()=>{
        DisableButtons()
        setAddingMode(true)
    }
    
    const inputFunction = (e)=>{
       setInputDisplay(e.target.value)
    }

    const onSubmit = ()=>{
        EnableButtons()
        setSkillsArr(prevArr => [...prevArr, inputDisplay])
        setAddingMode(false)
        setInputDisplay("")
    }

    const deleteSkills = (skill)=>{
        setSkillsArr(skillsArr.filter(x => (x !== skill)))
    }  

    const skills = skillsArr.map(x=>{
            return(
                <div key={x} className="skills-list">
                    <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                    {x}
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'
                     alt='cross' onClick={()=>deleteSkills(x)}/>
                </div>
            )
        })
        if(addingMode){
        return (
            <div className='skills'>
                <label>Skills</label>
                <input value={inputDisplay} onChange={inputFunction}/>
                <button onClick={onSubmit}>Add Skill</button>
                {skills}
            </div>
        );
    }else{
        return(
            <div className='skills'>
                <label>Skills</label>
                <button onClick={addingModeOn}>Add Skills</button>
                {skills}
            </div>
        )
    }
}

export default Skills;