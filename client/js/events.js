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


var lastNoteId, lastNoteEmail;
Template.note.events({
    "click #approve": function(event) {
        //event.preventDefault();
        console.log("Clicked Approve");
        console.log("last noteid: "+lastNoteId);
        console.log("last noteemail: "+lastNoteEmail);

        Meteor.call('approveNote', Meteor.user().profile.name, lastNoteId, lastNoteEmail, $("#approve-reason").val());
    },
    "click .approve-pre": function(event) {
        lastNoteId = event.target.dataset.noteid;
        lastNoteEmail = event.target.dataset.noteemail;
    },
    "click .send-up": function(event) {
        lastNoteId = event.target.dataset.noteid;
        lastNoteEmail = event.target.dataset.noteemail;
    },
    "click .send-down": function(event) {
        lastNoteId = event.target.dataset.noteid;
        lastNoteEmail = event.target.dataset.noteemail;
    },
    "click .reject": function(event) {
        lastNoteId = event.target.dataset.noteid;
        lastNoteEmail = event.target.dataset.noteemail;
    }
});