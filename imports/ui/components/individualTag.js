import { Tag } from '../../api/Tag.js'
import "./individualTag.html"

Template.individualTag.helpers({
  create: function(){
     //subscribe here
  },
});

Template.individualTag.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema(Tag.getSchema())
    .validate(Template.currentData());
  });
});
