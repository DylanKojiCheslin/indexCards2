import './listOfIndividualTags.html';
import "./individualTag.html"
import { Template } from 'meteor/templating';
import { Tag } from '../../api/tag/Tag.js'

Template.listOfIndividualTags.onCreated(function() {

  // this.subscribe("listOfTagsSubscription");
  this.autorun(() => {
    this.subscribe("listOfTagsSubscription");
  });
});


Template.listOfIndividualTags.helpers({
  listOfTags: function(){
    let _theTags = Tag.cursor({});
    console.log(
    'listOfTags helper '
    );
    console.log(_theTags);
    return _theTags;
  }
});
