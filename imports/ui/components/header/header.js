import { Template } from 'meteor/templating';

import './header.html'

var backgroundimg;

Template.Header.helpers({
  title: 'It\'s Cake Time',
  subtext: 'Your one stop shop for cakes and bakes and anything baked except snakes',
  highlightImg: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg',
  // make a function if no highlightImg then the div with shadow display: none
});

Template.Header.onRendered(function () {
    var template = this;

    // figure out how to set in helper
    var backgroundimg = "url('http://www.crylaughheal.com/wp-content/uploads/2016/02/wedding-cakes-shop.jpg')";

    template.find('.jumbotron').style.backgroundImage = backgroundimg;
});
