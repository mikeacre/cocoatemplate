import { Template } from 'meteor/templating';

import './submitquote.html'

var currentTab = 0;

var formData = [];
var first, last, email, img, idea;
// need to set default value for the select input
var filling = 'Red Velvet';
var flavor = 'Red Velvet';


// this has all the data to access
// create a confirmation page
function onSubmit(){
  formData.push(first, last, email, img, idea, filling, flavor);
  console.log(formData);
  formData = [];
  first, last, email, img, idea, filling, flavor = "";
}

function onButton(phase, click){
  var n = currentTab;

  if(click === 'next'){
    if (!validateForm()){
      return false;
    }
    phase[n].style.display = "none";

  currentTab++;
  n = currentTab;
  }

  if(click === 'prev'){
    phase[n].style.display = "none";
    currentTab--;
    n = currentTab;
  }

  phase[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  }
  else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n == (phase.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").type = "submit";
  }
  else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

}
function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  var tab = currentTab + 1;
  x = $('div#phase');
  y = x[currentTab].getElementsByClassName("form-control");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {

    // If a field is empty...
    if (y[i].value === '') {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  return valid;
}

Template.SubmitQuote.events({
  'change input#pic': function(e, template){
    var file = e.currentTarget.files[0];

    var reader = new FileReader();
    reader.onload = function(e) {
      template.find('#img-upload').src = e.target.result;
    };

    // upload image to db not sure what you want object to look like
    img = file;

    reader.readAsDataURL(file);
  },
  'change input#firstname': function(e){
    first = e.target.value;
  },
  'change input#lastname': function(e){
    last = e.target.value;
  },
  'change textarea#idea': function(e){
    idea = e.target.value;
  },
  'change input#email': function(e){
    email = e.target.value;
  },
  'change select#filling': function(e, template){
    filling = e.target.value;
  },
  'change select#flavor': function(e){
    flavor = e.target.value;
  },

  'click button#nextBtn'(e, template){
    e.preventDefault();
    var phase = template.findAll('.h');

    if (currentTab >= (phase.length -1)) {
      if (!validateForm()){
        return false;
      }


      // ... the form gets submitted:
      onSubmit();
      onButton(phase, 'next');
      template.find('.steps').style.display = "none";
      return true;
    }

    onButton(phase, 'next');
  },


  'click button#prevBtn'(e, template){
    e.preventDefault();
    var phase = template.findAll('.h');

    onButton(phase, 'prev');
  },

  'submit .home'(e){
    e.preventDefault();
    onSubmit();
  },

});

Template.SubmitQuote.onRendered(function () {
  var template = this;
  var n = currentTab;
  var phase = template.findAll('.h');
  phase[n].style.display = "block";

  if (n == 0) {
    template.find("#prevBtn").style.display = "none";
  }

  else {
    template.find("#prevBtn").style.display = "inline";
  }

});

Template.SubmitQuote.helpers({

})
