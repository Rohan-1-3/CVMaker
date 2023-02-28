import React, { useEffect, useState } from 'react';
import uniqid from "uniqid"
import DisableButtons, { EnableButtons } from '../DisableButtonsDOM';

function Interest({handleInterests}) {
    const [interests, setInterest] = useState( {// new interest object
        key: uniqid(),
        isSubmit : true,
        text : ""
    },)
    const [interestsArray, setInterestsArray] = useState([])
    const [addInterests, setAddInterests] = useState(false)
    const [editInput, setEditInput] = useState("")

    useEffect(()=>{
        handleInterests(interestsArray)
    }, [interestsArray, handleInterests])

    const addingInterests = ()=>{
        DisableButtons()
        setAddInterests(true)
    }

    const deletingInterests = (id)=>{
        setInterestsArray(interestsArray.filter(x => x.key !== id))
    }

    const editButton = (id, text)=>{// updates the button to form
        DisableButtons()
        setInterestsArray(interestsArray.map(
            interest =>( interest.key === id) ? {...interest, isSubmit: false} : interest))
        setEditInput(text)
    }

    const editInputFunction = (e)=>{// inputting the value
        setEditInput(e.target.value)
    }

    const editingInterests = (interest)=>{
        EnableButtons()
        setInterestsArray(interestsArray.map(
            x =>( x.key === interest.key) ? {...x, isSubmit:true, text: editInput} : x))
        setEditInput("")
    }

    const handleInterestInput = (e)=>{// updating the input value
        setInterest({...interests, text: e.target.value})
    }

    const interestFormHandle = (e)=>{// inserts new interest to arr 
        e.preventDefault()
        EnableButtons()
        setInterestsArray(prevArray => [...prevArray, interests])
        setAddInterests(false)
        setInterest({key: uniqid(), isSubmit : true, text : ""})
    }

    const renderInterests = interestsArray.map(interest => {
        if(interest.isSubmit){// display interest only if all are not in edit mode
        return (
            <div key={interest.key} className="interest-list">
            <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='arrow'/>
                {interest.text}
                <img  onClick={()=>deletingInterests(interest.key)} 
                        src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png' 
                        alt='cross'/>
                <img  onClick={()=>editButton(interest.key, interest.text)}
                        src='https://cdn-icons-png.flaticon.com/512/1827/1827951.png' 
                        alt='cross'/>
            </div>
        )}
        else{// edit mode turns into form
            return (
                <div key={interest.key}>
                    <input value={editInput} onChange={editInputFunction}/>
                    <img  onClick={()=>editingInterests(interest)}
                        src='https://cdn-icons-png.flaticon.com/512/1827/1827951.png' 
                        alt='cross'/>
                </div>
            )
        }
    })
    if(addInterests){// adding mode
        return(
            <React.Fragment>
                <div className='interest'>
                <label>Interests</label>
                    <input value={interests.text} onChange={handleInterestInput}/>
                    <button onClick={interestFormHandle}>Add Interest</button>
                    {renderInterests}
                </div>
            </React.Fragment>
        )
    }
    else{// not in adding mode so has a add button
        return (
            <React.Fragment>
                <div className='interest'>
                <label>Interests</label>
                    <button onClick={addingInterests}>Add Interests</button>
                    {renderInterests}
                </div>
            </React.Fragment>
        );
    }
}

export default Interest;