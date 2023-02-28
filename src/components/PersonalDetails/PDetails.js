/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

function PDetails({handlePDetails}) {
    const [imageSrc, setImageSrc] = useState("");
    const [description, setDescription] = useState("");
    const [profession, setProfession] = useState("");

    useEffect(()=>{
        handlePDetails({imageSrc, description, profession})
    },[imageSrc, description, profession])

    const handleImage = (e)=>{
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }

    const handleProfession=(e)=>{
        setProfession(e.target.value)
    }

    return (
        <div className='details'>
            <input type="file" accept="image/png, image/jpeg" 
            title='Choose Your Display Picture' onChange={handleImage} required/>

            <textarea value={description}  placeholder='Profile Descrition...' onChange={handleDescription} 
            minLength="50" required/>

            <input value={profession}  placeholder='Profession' onChange={handleProfession} 
            minLength="3" type="text" required/>
        </div>
    );
}

export default PDetails;