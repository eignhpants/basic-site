
/*
	Vendor Imports
*/
import $ from 'jquery';
import jQuery from 'jquery';
import pug from 'pug';
import _ from 'underscore';
import React    from 'react';
import ReactDOM from 'react-dom';

/*
	Set up window for DOM manipulation and bootstrap
	TODO possibly remove completely, use templates and native DOM calls
*/
window.$ = $;
window.jQuery = jQuery;
var bootstrap = require('bootstrap');      // not compatible with ES6 use legacy

// Sanity Check
//console.log(window.location.pathname);
import { Timeline } from './components/timeline.js';

/*
	Application variables
*/
//console.log(data);
/*
  Handle js for a given route
*/
if(window.location.pathname === '/'){
  fetch("/timeline")
    .then((response)=>response.json())
    .then((timeline)=>{
      index(timeline);
    });
}


function index(timelineFromServer){
  //console.log(timelineFromServer);
  ReactDOM.render(
    <Timeline timeline={timelineFromServer}/>,
    document.getElementById('timeline_app')
  );

};
