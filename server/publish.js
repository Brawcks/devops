import { Meteor } from 'meteor/meteor';

const self = this.Meteor;

Meteor.publish('recipes', function() {
    return Recipes.find({author: self.userId()})
})