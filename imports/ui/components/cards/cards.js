import { Template } from 'meteor/templating';

import './cards.html'

Template.CardRow.helpers({
  cards: [
    {title: 'Square Cake', imgsrc: "https://i5.walmartimages.com/asr/e3fc8b04-842a-4043-a9c4-9cabdfe4fabb_1.ebf3f6d17536b1a522d097ac925154d2.jpeg" },
    {title: 'Round Cake', imgsrc: 'https://assets.marthastewart.com/styles/wmax-750/d5/raven/raven_horiz_0.jpg?itok=cH3dFlK6'},
    {title: 'Tall Cakes', imgsrc: 'https://alexandracooks.com/wp-content/uploads/2019/02/finishedcake.jpg'}
  ],
});
