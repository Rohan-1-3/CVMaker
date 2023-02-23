import React, { Component } from 'react';
import Details from './PersonalDetails/Details';
class Form extends Component {
    render() {
        return (
            <form>
               <Details />
               <button>Submit</button>
            </form>
        );
    }
}

export default Form;