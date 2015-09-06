/**
 * Created by Ankur on 9/5/2015.
 */
Meteor.methods({
    addNote: function (text, email, category) {
        // Make sure the user is logged in before inserting a task
        Notes.insert({
            text: text,
            createdAt: new Date(),
            contact: email
        });


        //find bottom level users that are in selected category...

        Meteor.users.find(

            { $and: [
                {"profile.children": { $exists: false }},
                {"profile.category": category}
            ]}

        );

        console.log("added note!");
    },
    deleteTask: function (taskId) {
        Tasks.remove(taskId);
    },
    rejectNote: function(noteId, reason) {

        var note = Notes.findOne({_id: noteId});


        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        /*this.unblock();
        Email.send({
            to: note.contact,
            from: "shuteit.mail@gmail.com",
            subject: "Note Rejected",
            text: "Unfortunately, your note of id "+noteId+" was rejected by "+Meteor.user().profile.name+"!<br><br><b>Content:</b>"+note.text+"<br><br><b>Reason:</b>"+reason
        });*/
    },
    setChecked: function (taskId, setChecked) {
        Tasks.update(taskId, { $set: { checked: setChecked} });
    }
});