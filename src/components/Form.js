import React, {useEffect, useState} from 'react';
import Education from './Education';
import Details from './PersonalDetails/Details';
import MainPreview from './Preview/MainPreview';
import Skills from './Skills';
import Work from './Work';

function Form() {
    const [name, setName] = useState({
        firstname: "",
        middlename: "",
        lastname: ""
      });
    
      const [pDetails, setPDetails] = useState({
        imageSrc: "",
        description: "",
        profession: ""
      });
    
      const [contacts, setContacts] = useState({
        number: "",
        email: "",
        address: ""
      });
    
      const [interest, setInterest] = useState([]);
      const [handles, setHandles] = useState([]);
      const [educationsArr, setEducationsArr] = useState([]);
      const [skills, setSkills] = useState([]);
      const [works, setWorks] = useState([]);

      const handleName = (nameInput) => {
        setName(nameInput);
      };

      const handlePDetails = (PDetails) => {
        setPDetails(PDetails);
      };
      
      const handleContacts = (contact) => {
        setContacts(contact);
      };
    
      const handleInterests = (interests) => {
        setInterest(interests);
      };
    
      const handleHandles = (handle) => {
        setHandles(handle);
      };
    
      const handleEducation = (education) => {
        setEducationsArr(education);
      };
    
      const handleSkills = (skill) => {
        setSkills(skill);
      };
    
      const handleWork = (work) => {
        setWorks(work);
      };

      const newState = {
        name,
        pDetails,
        contacts,
        interest,
        handles,
        educationsArr,
        skills,
        works
      };
      console.log(newState)

      useEffect(() => {
        const submitForm = document.querySelector(".preview-btn");
        const previewDiv = document.querySelector(".preview");
    
        const handleClick = () => {
          previewDiv.classList.remove("hide");
          previewDiv.classList.add("show");
        };
    
        submitForm.addEventListener("click", handleClick);
    
        return () => {
          submitForm.removeEventListener("click", handleClick);
        };
      }, []);

    return (
        <React.Fragment> 
                <div id='container'>
                    <form className='my-form' onSubmit={(e)=>{
                        e.preventDefault()}}>
                    <Details handleName = {handleName}
                                handlePDetails = {handlePDetails}
                                handleContacts = {handleContacts}
                                handleInterests = {handleInterests}
                                handleHandles = {handleHandles}/>
                        <Education handleEducation = {handleEducation}/>
                        <Skills handleSkills={handleSkills}/>
                        <Work handleWork={handleWork}/>
                    <button className="preview-btn">Preview</button>
                    </form>
                </div>
                <MainPreview state={newState}/>
            </React.Fragment>
    );
}

export default Form;