import { Meteor } from 'meteor/meteor'
import { Tag } from '../../tag/Tag.js'

Meteor.publish("listOfTagsSubscription", function(){
  let stuff = Tag.cursor({});
  console.log(stuff);
  return stuff;
});
