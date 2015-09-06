/**
 * Created by Ankur on 9/5/2015.
 */
Meteor.publish("notes", function () {
    return Notes.find({children: [this.userId]});
});