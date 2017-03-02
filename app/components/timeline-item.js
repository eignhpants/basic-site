
import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';


//
// UI Components
//_______________
class TimeLineItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.item,
    }
    // url (required), options (optional)
    // fetch('/timeline', {
	  //    method: 'get'
    //  }).then((response)=>console.log(response));
  }

  render(){
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

module.exports = TimeLineItem;
