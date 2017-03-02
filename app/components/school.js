
import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';


//
// UI Components
//_______________
class School extends Component {

  constructor(props){
    super(props);
    this.state = {
      school: props.school,
    }
    // url (required), options (optional)
    // fetch('/timeline', {
	  //    method: 'get'
    //  }).then((response)=>console.log(response));
  }

  render(){
    return (
      <div className="school">
        <h4 className="school--title">{this.state.school.school}</h4>
        <h3 className="school--concentration">{this.state.school.concentration}</h3>
        <h5 className="school--date">{this.state.school.date}</h5>
      </div>
    )
  }
}

module.exports = School;
