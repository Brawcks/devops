import { Meteor } from 'meteor/meteor';

Template.MainLayout.helpers({
    username: function () {
        console.log(Meteor.user().emails[0].address);
        return Meteor.user().emails[0].address;
    },
});