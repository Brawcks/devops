Template.Recipe.events({
    'click .toggle-menu': function () {
        console.log('click');
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .btn-deny2': function (){
        console.log('click2');
        Meteor.call('removeMenuItem', this._id);
    }
});