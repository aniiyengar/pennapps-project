/**
 * Created by Ankur on 9/5/2015.
 */
Meteor.methods({
    addNote: function (text, email, category) {
        console.log("category: "+category);

        //find bottom users that are in selected category
        var res = Meteor.users.find({ $and: [
            {"profile.children": { $exists: false }},
            {"profile.category": category}
        ]});


        var assignees = [];
        res.forEach(function(obj){
            assignees.push(obj._id);
        });

        console.log(assignees);

        Notes.insert({
            text: text,
            createdAt: new Date(),
            contact: email,
            assignees: assignees
        });
        console.log("added note!");
    },
    approveNote: function(noteId, contact, reason) {



        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
        Email.send({
            from: "shuteit.mail@gmail.com",
            to: contact,
            subject: "Congratulations! Your note has successfully made it through!",
            text: "Congratulations! Your note (ID: "+noteId+" has been acknowledged and approved!<br><br><b>Approver's Comments:</b><br>"+reason
        });
    },
    shuteNote: function(noteId) {
        var shuteId = Meteor.users.findOne({"profile.children": this.userId});

    },
    rejectNote: function(noteId, reason) {

        var note = Notes.findOne({_id: noteId});



    }
});