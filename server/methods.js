/**
 * Created by Ankur on 9/5/2015.
 */
Meteor.methods({
    approveNote: function(name, noteId, contact, reason) {



        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        Notes.remove({_id: noteId});

        console.log("NOTE APPROVED! Sending email...");

        this.unblock();
        Email.send({
            from: "shuteit.mail@gmail.com",
            to: contact,
            subject: "Your note has successfully made it through",
            text: "Your note (ID: " + noteId + ") has been acknowledged by "+name+". Your problems have been recognized! Their comment: " + reason
        });
        console.log("Email sent!");
    }
});