
import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';

import TimeLineItem from './timeline-item';
import Job from './job';
//
// UI Components
//_______________
export class Timeline extends Component {

  constructor(props){
    super(props);
    console.log(props.timeline);
    this.state = {
      jobs: this._makeList(props.timeline.work_history),
    }

    // url (required), options (optional)
    // fetch('/timeline', {
	  //    method: 'get'
    //  }).then((response)=>console.log(response));

  }

  _makeList(list){
    let temp_arr = _.map(list,(item, i)=>
      <Job item={item.company} key={_.uniqueId("job-" + i)} />
    );
    return temp_arr;
  }

  render(){
    return (
      <div>{this.state.jobs}</div>
    )
  }
}
