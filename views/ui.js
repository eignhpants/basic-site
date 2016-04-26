

var $ = require('jquery');
//var config = require('./config')
//var lastfm = require('../routes/methods/lastfm_methods')


//config.init();




function buttonClick(e) {
   if (!e) e = window.event;
   e.stopPropagation();
   // do what you want
}

$(document).ready(function(){
    $(".contact-btn").click(function(e){
        e.stopPropagation();
        //alert("Hello")
    });
});
