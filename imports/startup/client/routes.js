import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/appBody.js';
import '../../ui/components/listOfIndividualTags.js';
import '../../ui/components/individualTag.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('appBody');
  },
});
