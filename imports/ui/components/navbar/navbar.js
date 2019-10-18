import { Template } from 'meteor/templating';

import './navbar.html'

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
