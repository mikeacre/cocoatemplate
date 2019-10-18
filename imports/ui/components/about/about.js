import { Template } from 'meteor/templating';

import './about.html'


Template.AboutComp.helpers({
  logo: '/img/logo.png',
  person: 'https://www.jbldrains.com/wp-content/uploads/2015/02/person-icon.png',

});

Template.AboutComp.events({
    'click': function(){
    }
});

Template.contact.helpers({
  phone: {num: '1234567890', img: 'https://cdn2.iconfinder.com/data/icons/devices-in-color/64/devices-colored-15-512.png'},
  email: {address:'cocoadecor@cocoadecor.com', img: 'http://www.clker.com/cliparts/b/e/6/6/1194986412424524297phone.svg.hi.png'},
  instagram: {address:'https://www.instagram.com/cocoadecor/', img: 'https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png'},
});
