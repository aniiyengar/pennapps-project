/**
 * Created by Ankur on 9/5/2015.
 */
Meteor.methods({
    addNote: function (text, email) {
        // Make sure the user is logged in before inserting a task
        /*if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }*/

        Notes.insert({
            text: text,
            createdAt: new Date(),
            contact: email
        });

        console.log("added note!");
    },
    deleteTask: function (taskId) {
        Tasks.remove(taskId);
    },
    setChecked: function (taskId, setChecked) {
        Tasks.update(taskId, { $set: { checked: setChecked} });
    }
});