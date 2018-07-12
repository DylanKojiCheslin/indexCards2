import './listOfIndividualTags.html';
import { Template } from 'meteor/templating';
import "./individualTag.html"


Template.listOfIndividualTags.onCreated(function() {

  console.log('listOfIndividualTags created');
  this.subscribe("listOfTagsSubscription");
  // this.autorun(() => {
  //   console.log('stuff');
  //   this.subscribe("listOfTagsSubscription");
  // });
});


Template.listOfIndividualTags.helpers({
  listOfTags: function(){
    console.log('listOfIndividualTags helper');
    return Tag.cursor({});
  }
});
