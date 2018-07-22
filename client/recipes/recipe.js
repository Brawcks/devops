Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    }
});

Template.Recipe.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .btn-delete': function (){
        Meteor.call('removeMenuItem', this._id);
    }
});
