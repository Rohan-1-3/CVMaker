/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

function Contacts({handleContacts}) {
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
  
    useEffect(()=>{
        handleContacts({number, email, address})
    }, [number, email, address])
    
    const handleNumber = (e) => {
      setNumber(e.target.value);
    };
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleAddress = (e) => {
      setAddress(e.target.value);
    };
  
    return (
        <div className='contacts'>
            <input value={number} onChange={handleNumber}  placeholder='Phone Number'
            pattern="[9][7-8][0-9]{8}" type="text" required/>

            <input value={email} onChange={handleEmail} 
            placeholder='E-mail' type="email" required/>

            <input value={address} onChange={handleAddress}   placeholder='Address'
            title='Suggested Format=>Balaju-15' required/>
        </div>
    );
}

export default Contacts;