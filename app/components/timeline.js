
import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';
import 'whatwg-fetch'; 

import TimeLineItem from './timeline-item';
import Job from './job';
import School from './school';
//
// UI Components
//_______________
export class Timeline extends Component {

  constructor(props){
    super(props);
    console.log(props.timeline);
    this.state = {
      jobs: this._makeJobs(props.timeline.work_history),
      education: this._makeSchools(props.timeline.education)
    }

    // url (required), options (optional)
    // fetch('/timeline', {
	  //    method: 'get'
    //  }).then((response)=>console.log(response));

  }

  _makeJobs(list){
    let temp_arr = _.map(list,(item, i)=>
      <Job job={item} key={_.uniqueId("job-" + i)} />
    );
    return temp_arr;
  }

  _makeSchools(list){
    let temp_arr = _.map(list,(item, i)=>
      <School school={item} key={_.uniqueId("school-" + i)} />
    );
    return temp_arr;
  }

  render(){
    return (
      <div>
        <div className="history__section">
          <h3>This is what I&#39;ve been up to:</h3>
          {this.state.jobs}
        </div>
        <div className="history__section">
          <h3>This is my education so far:</h3>
          {this.state.education}
        </div>
      </div>
    )
  }
}
