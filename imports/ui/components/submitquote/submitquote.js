import { Template } from 'meteor/templating';

import './submitquote.html'

var currentTab = 0;

Template.SubmitQuote.events({
  'click button#nextBtn'(e, template){
    e.preventDefault();
    var x = template.findAll('.h');
    var n = currentTab;

    console.log(n);
    console.log(x.length);
    if (currentTab >= (x.length -1)) {
      console.log('submit');
      // ... the form gets submitted:
      // template.find(".home").submit();
      return false;
    }

    x[n].style.display = "none";

    currentTab++;
    n = currentTab;


    x[n].style.display = "block";
    if (n == 0) {
    template.find("#prevBtn").style.display = "none";
    } else {
    template.find("#prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    template.find("#nextBtn").innerHTML = "Submit";
  } else {
    template.find("#nextBtn").innerHTML = "Next";
  }


},

'click button#prevBtn'(e, template){
  e.preventDefault();
  var x = template.findAll('.h');
  var n = currentTab;
  x[n].style.display = "none";

  currentTab--;
  n = currentTab;


  x[n].style.display = "block";
  if (n == 0) {
  template.find("#prevBtn").style.display = "none";
  } else {
  template.find("#prevBtn").style.display = "inline";
}
if (n == (x.length - 1)) {
  template.find("#nextBtn").innerHTML = "Submit";
} else {
  template.find("#nextBtn").innerHTML = "Next";
}
},

})

Template.SubmitQuote.onRendered(function () {
  var template = this;
  var n = currentTab;
    var x = template.findAll('.h');
    console.log(x.length);
    x[n].style.display = "block";
    if (n == 0) {
    template.find("#prevBtn").style.display = "none";
    } else {
    template.find("#prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    template.find("#nextBtn").innerHTML = "Submit";
  } else {
    template.find("#nextBtn").innerHTML = "Next";
  }
});

Template.SubmitQuote.helpers({


})
