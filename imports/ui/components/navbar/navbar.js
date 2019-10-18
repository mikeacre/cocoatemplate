import { Template } from 'meteor/templating';

import './navbar.html'

var backgroundimg = "url('/img/banner.jpg')";


Template.Navbar.events({
  'click .navbar-toggler': function(e, template){
    console.log('test')
    var visible = template.find('.bg').style.backgroundImage
    if (!visible) {
    template.find('.bg').style.backgroundImage = backgroundimg;
    }
    else {
      template.find('.bg').style.backgroundImage = '';
    }
  }
});

Template.Navbar.helpers({
  logo: '/img/logo.png',
  title: 'Cocoa Decor',
  links: [
    { text: 'Home', url: '/' },
    { text: 'Gallery', url: '/gallery'},
    { text: 'About', url: '/about' },
  ],
  order: {text: 'Get Quote', url:'/order'},
});

Template.Navbar.onRendered(function () {
    var template = this;

    // figure out how to set in helper
    var backgroundimg = "url('/img/banner.jpg')";

    template.find('.navbar').style.backgroundImage = backgroundimg;
});
