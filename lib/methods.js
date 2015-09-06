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
    sendUp: function(noteId) {
        var shuteId = Meteor.users.findOne({"profile.children": this.userId});
        console.log(shuteId);

        Notes.update({
            _id: nodeId
        }, { $pop: { assignees: 1}});

        Notes.update({
            _id: nodeId
        }, { $push: { assignees: shuteId}});
    },
    shuteDown: function(nodeId) {
        var shuteId = Meteor.user().children[0]
    },
    rejectNote: function(noteId, reason) {

        var note = Notes.findOne({_id: noteId});



    }
});