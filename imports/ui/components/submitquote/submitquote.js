import { Template } from 'meteor/templating';

import './submitquote.html'



Template.SubmitQuote.events({
  'click button#nextBtn'(e){
    e.preventDefault();
    this.phase1();
},


})

Template.SubmitQuote.helpers({
  // var template = this;
  // var flavor,
  //     filling,
  //     firstName,
  //     lastName,
  //     email,
  //     img,
  //     description;

  phase1(){
    var x = this.findAll('#phase');
    console.log(x);
  }

})
