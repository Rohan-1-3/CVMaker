import React from 'react';
import arrow from "../../images/arrow.png"
import Content from './Content';
import Header from './Header';
import Lists from './Lists';
import Work from './Work';

function MainPreview({state}) {
    const interest = state.interest.map(x => x.text)
    return (
        <div>
            <div className='preview hide'>
                <Header state = {state}/>
                <Content state = {state} arrow = {arrow}/>
                <Lists name = "Skills" list = {state.skills} arrow = {arrow}/>
                <Lists name = "Interests" list = {interest} arrow = {arrow}/>
                <Work state = {state} arrow = {arrow}/>
            </div>
        </div>
    );
}

export default MainPreview;