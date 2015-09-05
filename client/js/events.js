/**
 * Created by Ankur on 9/5/2015.
 */
Template.create.events({
    "click #send": function(event) {
        console.log(quill.getHTML());

        var email = $('#email').val();
        if(/\S+@\S+\.\S+/.test(email)) {
            console.log("Send 2 server!");
            Meteor.call('addNote', quill.getHTML(), email);
        }
        else {
            console.log("Invalid email!");
        }

    },
    "click #approve": function(event) {

    },
    "click #chuteup": function(event) {

    },
    "click #reject": function(event) {

    }
});