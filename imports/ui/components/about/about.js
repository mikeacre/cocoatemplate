import { Template } from 'meteor/templating';

import './about.html'

var section = 0;

Template.AboutComp.helpers({
  logo: '/img/logo.png',
  person: 'https://www.jbldrains.com/wp-content/uploads/2015/02/person-icon.png',

});

Template.AboutComp.events({
  'click button#first'(e, template){
    e.preventDefault();
    var phase = template.find('div#first');
    phase.style.display = 'flex';
    var button = template.find('button#first');
    var oldClass = button.className;
    button.className += " active"
    button.disabled = true;
    console.log(button.disabled);

    phase = template.find('div#second');
    button = template.find('button#second');
    button.className = oldClass;
    button.disabled = false;
    console.log(button.disabled);
    phase.style.display = 'none';
    phase = template.find('div#third');
    button = template.find('button#third');
    button.className = oldClass;
    phase.style.display = 'none';
    button.disabled = false;
    console.log(button.disabled);
  },
  'click button#second'(e, template){
    e.preventDefault();
    var phase = template.find('div#second');
    phase.style.display = 'flex';
    var button = template.find('button#second');
    var oldClass = button.className;
    button.className += " active";
    button.disabled = true;
    console.log(button.disabled);


    phase = template.find('div#first');
    button = template.find('button#first');
    button.className = oldClass;
    button.disabled = false;
    console.log(button.disabled);
    phase.style.display = 'none';
    phase = template.find('div#third');
    button = template.find('button#third');
    button.className = oldClass;
    button.disabled = false;
    console.log(button.disabled);
    phase.style.display = 'none';
  },
  'click button#third'(e, template){
    e.preventDefault();
    var phase = template.find('div#third');
    phase.style.display = 'flex';
    var button = template.find('button#third');
    var oldClass = button.className;
    button.className += " active"
    button.disabled = true;
    console.log(button.disabled);

    phase = template.find('div#second');
    button = template.find('button#second');
    button.className = oldClass;
    button.disabled = false;
    console.log(button.disabled);
    phase.style.display = 'none';
    phase = template.find('div#first');
    button = template.find('button#first');
    button.className = oldClass;
    button.disabled = false;
    console.log(button.disabled);
    phase.style.display = 'none';
  },
});

Template.contact.helpers({
  phone: {num: '1234567890', img: 'https://cdn2.iconfinder.com/data/icons/devices-in-color/64/devices-colored-15-512.png'},
  email: {address:'cocoadecor@cocoadecor.com', img: 'http://www.clker.com/cliparts/b/e/6/6/1194986412424524297phone.svg.hi.png'},
  instagram: {address:'https://www.instagram.com/cocoadecor/', img: 'https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png'},
});
