import { Tag } from '../../api/tag/Tag.js';
import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import "./individualTag.html";

Template.individualTag.onCreated(function individualTagOnCreated() {
  console.log('individualTag onCreate');
  console.log(Template.currentData());
  this.autorun(() => {
    console.log('individualTag');
    console.log(this);
    console.log(Template.currentData());
    new SimpleSchema(Tag.getSchema())
    .validate(Template.currentData());
  });
});


Template.individualTag.helpers({
  'tagText': function(){
    return this.text();
  },
});
