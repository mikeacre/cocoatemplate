import { Template } from 'meteor/templating';

import './header.html'

Template.Header.helpers({
  title: 'It\'s Cake Time',
  subtext: 'Your one stop shop for cakes and bakes and anything baked except snakes',
  highlightImg: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg',
});
