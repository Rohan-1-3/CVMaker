/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

function Name({handleName}) {
    const [firstname, setFirstName] = useState("");
    const [middlename, setMiddleName] = useState("");
    const [lastname, setLastName] = useState("");

    useEffect(()=>{
        handleName({firstname, middlename, lastname})
    }, [firstname, middlename, lastname])  

    const firstNameRender = (e)=>{
        setFirstName(e.target.value)
    }

    const middleNameRender =(e)=>{
        setMiddleName(e.target.value)        
    }

    const lastNameRender = (e)=>{
        setLastName(e.target.value)
    }

    return (
        <div className='name'>
            <input value={firstname} onChange={firstNameRender} 
            minLength="3" maxLength="15" type="text" required/>

            <input value={middlename} onChange={middleNameRender} type="text"/>

            <input value={lastname} onChange={lastNameRender} type="text" 
            minLength="3" maxLength="15" required/>
        </div>
    );
}

export default Name;