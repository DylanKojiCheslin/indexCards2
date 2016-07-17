import { Meteor } from 'meteor/meteor'
import { Tag } from '../../api/tag/Tag.js'

Meteor.startup(function(){
  if (Tag.isEmpty()) {
    let newThang = Tag.build({text : 'stuff'});
    newThang.save();
  }
});
