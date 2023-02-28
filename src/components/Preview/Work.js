import React from 'react';

function Work({state}) {
    const workList = state.works.map(x =>{
        return(
            <React.Fragment>
                <h3>{x.name}</h3>
                {x.post}, {x.joined} - {x.passed}
            </React.Fragment>
        )
    })
    if(state.works.length > 0){
        return (
            <div className='work'>
                <h2>Work Experience</h2>
                {workList}
            </div>
        );
    }else{
        return(
            <React.Fragment></React.Fragment>
        )
    }
}

export default Work;