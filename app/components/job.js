
import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';


//
// UI Components
//_______________
class Job extends Component {

  constructor(props){
    super(props);
    this.state = {
      job: props.job,
    }
    // url (required), options (optional)
    // fetch('/timeline', {
	  //    method: 'get'
    //  }).then((response)=>console.log(response));
  }

  render(){
    return (
      <div className="job">
        <h4 className="job--company">{this.state.job.company}</h4>
        <h3 className="job--title">{this.state.job.title}</h3>
        <h5 className="job--date">{this.state.job.date}</h5>
        <p className="job--description">{this.state.job.description}</p>
        <ul className="job--bullets">
          {_.map(this.state.job.bullets, (obj, i)=>
            <li key={i}>{obj}</li>
          )}
        </ul>

      </div>
    )
  }
}

module.exports = Job;
