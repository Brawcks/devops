Template.Emails.events({
    'submit form': function () {
        event.preventDefault();
        // Get input value
        const target = event.target;
        // data = target.dest.value;
        const data = {
            dest: target.dest.value,
            from: "contact@devops.com",
            title: target.title.value,
            content: target.content.value,
        }
        
        Meteor.call('sendEmail', data.dest, data.from, data.title, data.content);
    }
})