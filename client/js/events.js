/**
 * Created by Ankur on 9/5/2015.
 */
Template.create.events({
    "click #problem-submit-button": function(event) {
        // console.log(quill.getHTML());

        var email = $('#email').val();
        if(/\S+@\S+\.\S+/.test(email)) {
            var category = $('#category').val();
            console.log("Adding note to server...");
            //Meteor.call('addNote', quill.getHTML(), email, category);
            Meteor.call('addNote', $("#problem-textarea"), email);
        }
        else {
            console.log("Invalid email!");
        }

    },
    "click #approve": function(event) {

    },
    "click #shute": function(event) {

    },
    "click #reject": function(event) {

    }
});