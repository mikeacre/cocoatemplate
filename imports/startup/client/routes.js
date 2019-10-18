import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//Import Global Components
import '../../ui/components/navbar/navbar.js';
import '../../ui/components/header/header.js';
import '../../ui/components/footer/footer.js';
import '../../ui/components/submitquote/submitquote.js';
import '../../ui/components/cards/cards.js';
import '../../ui/components/gallery/gallery.js';
import '../../ui/components/about/about.js';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/gallery/gallery.js';
import '../../ui/pages/about/about.js';
import '../../ui/pages/order/order.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Home' });
  },
});

FlowRouter.route('/gallery', {
  name: 'App.gallery',
  action() {
    BlazeLayout.render('App_body', { main: 'Gallery' });
  },
});

FlowRouter.route('/about', {
  name: 'App.about',
  action() {
    BlazeLayout.render('App_body', { main: 'About' });
  },
});

FlowRouter.route('/order', {
  name: 'App.order',
  action() {
    BlazeLayout.render('App_body', { main: 'Order' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'Home' });
  },
};
