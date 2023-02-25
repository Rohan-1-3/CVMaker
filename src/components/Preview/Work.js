import React, { Component } from 'react';

class Work extends Component {
    render() {
        const props = this.props.state
        const workList = props.works.map(x =>{
            return(
                <React.Fragment>
                    <h3>{x.name}</h3>
                    {x.post}, {x.joined} - {x.passed}
                </React.Fragment>
            )
        })
        if(props.works.length > 1){
            return (
                <div className='work'>
                    <h2>Work Experience: </h2>
                    {workList}
                </div>
            );
        }else{
            return(
                <div>
                </div>
            )
        }
        
    }
}

export default Work;