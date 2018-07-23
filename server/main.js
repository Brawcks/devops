import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  import '../collections/recipes.js'
  import './publish.js';
  import './emails.js';

});
