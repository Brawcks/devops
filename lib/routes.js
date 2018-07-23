Accounts.onLogin(function () {
    FlowRouter.go('/recipe-book');
});



FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}])

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('/recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
});

FlowRouter.route('/emails', {
    name: 'emails',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Emails'});
        // Client: Asynchronously send an email.
        // Meteor.call(
        //     'sendEmail',
        //     'Vincent <coffin.vincent.sp@gmail.com>',
        //     'coffin.vincent.sp@gmail.com',
        //     'Hello from Meteor!',
        //     'This is a test of Email.send.'
        // );
    }
});

FlowRouter.route('/messages', {
    name: 'messages',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Messages'});
    }
});