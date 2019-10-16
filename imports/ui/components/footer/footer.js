import { Template } from 'meteor/templating';

import './footer.html'

// put code here ya dummy

Template.Footer.helpers({
  sideImg: [
    {src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg'},
  ],
  phone: {num: '1234567890', img: 'https://cdn2.iconfinder.com/data/icons/devices-in-color/64/devices-colored-15-512.png'},
  email: {address:'cocoadecor@cocoadecor.com', img: 'http://www.clker.com/cliparts/b/e/6/6/1194986412424524297phone.svg.hi.png'},
  instagram: {address:'https://www.instagram.com/cocoadecor/', img: 'https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png'},
  contactus: 'Questions about your cake?',
  subtext: 'We are more than happy to help',
});
