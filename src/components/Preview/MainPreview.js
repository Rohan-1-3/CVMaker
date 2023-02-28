import React from 'react';
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
                <Content state = {state}/>
                <Lists name = "Skills" list = {state.skills}/>
                <Lists name = "Interests" list = {interest}/>
                <Work state = {state}/>
            </div>
        </div>
    );
}

export default MainPreview;

// import React, { Component } from 'react';
// import Content from './Content';
// import Header from './Header';
// import Lists from './Lists';
// import Work from './Work';

// class MainPreview extends Component {
//     render() {
        // const interest = this.props.state.interest.map(x => x.text)
        // const props = this.props.state
        // return (
        //     <div>
        //         <div className='preview hide'>
        //             <Header state = {props}/>
        //             <Content state = {props}/>
        //             <Lists name = "Skills" list = {props.skills}/>
        //             <Lists name = "Interests" list = {interest}/>
        //             <Work state = {props}/>
        //         </div>
        //     </div>
        // );
//     }
// }

// export default MainPreview;