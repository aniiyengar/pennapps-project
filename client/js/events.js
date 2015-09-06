/**
 * Created by Ankur on 9/5/2015.
 */
Template.create.events({
    "click #problem-submit-button": function(event) {
        event.preventDefault();

        var email = $('#email').val();
        if(/\S+@\S+\.\S+/.test(email)) {
            var category = $('#category').val();
            console.log("Adding note to server...");
            //Meteor.call('addNote', quill.getHTML(), email, category);
            Meteor.call('addNote', $("#problem-textarea").val() , email, category);
        }
        else {
            console.log("Invalid email!");
        }
    }
});

Template.note.events({
    "click #approve": function(event) {
        event.preventDefault();
        console.log("FHSDJFSDF");
        console.log(event);
        var id = $(this).data("noteid");
        console.log(id);

        Meteor.call('approveNote', id, $("#approve-reason").val());
    },
    "click #send-up": function(event) {

    },
    "click #send-down": function(event) {

    },
    "click #reject": function(event) {

    }
});