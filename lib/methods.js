/**
 * Created by Ankur on 9/5/2015.
 */
Meteor.methods({
    addNote: function (text, email, category) {
        // Make sure the user is logged in before inserting a task
        var noteid = Notes.insert({
            text: text,
            createdAt: new Date(),
            contact: email
        });


        //find bottom level users that are in selected category...
        console.log("category: "+category);
        var toAssign = Meteor.users.find(
            { $and: [
                {"profile.children": { $exists: false }},
                {"profile.category": category}
            ]}

        );
        toAssign.forEach(function(element, index) {
            console.log(element.profile.name);
            if(typeof element.profile.notes != 'undefined') {
                element.profile.notes.push(noteid);
            }
            else {
                element.profile.notes = [noteid];
            }
        });

        console.log("added note!");
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
    }/*,
    setChecked: function (taskId, setChecked) {
        Tasks.update(taskId, { $set: { checked: setChecked} });
    }*/
});