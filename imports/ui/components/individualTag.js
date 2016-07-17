import { Tag } from '../../api/Tag.js'
import "./individualTag.html"

Template.individualTag.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema(Tag.getSchema())
    .validate(Template.currentData());
  });
});
