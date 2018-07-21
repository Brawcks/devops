import { Meteor } from 'meteor/meteor';

const self = this.Meteor;

Meteor.publish('recipes', function() {
    return Recipes.find({author: self.userId()})
})

Meteor.publish('singleRecipe', function(id) {
    check(id, String)
    return Recipes.find({_id: id})
})