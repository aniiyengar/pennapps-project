/**
 * Created by Ankur on 9/5/2015.
 */
Template.notes.helpers({
    notes: function() {
        return Notes.find({}, {sort: {createdAt: -1}});
    }


});

Template.userinfo.helpers({
	fullName: function() {
		return Meteor.user().profile.fullName;
	}
})