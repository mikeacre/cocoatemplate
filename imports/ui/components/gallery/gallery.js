import { Template } from 'meteor/templating';

import './gallery.html'

Template.Gallery.helpers({
  imgs: [
    {src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg'},
    {src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg'},
    {src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg'},
    {src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg'},
    {src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg'},
    {src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg'},
  ],
});
