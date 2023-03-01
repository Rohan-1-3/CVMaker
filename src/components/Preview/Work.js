import React from 'react';

function Work({state,  arrow}) {
    const workList = state.works.map(x =>{
        return(
            <div className='work-display'>
                <h3>{x.name}</h3>
                {x.post}, {x.joined} - {x.passed}
            </div>
        )
    })
    if(state.works.length > 0){
        return (
            <div className='work'>
                <h1><img src={arrow} alt=""/>Work Experience</h1>
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