/**
 * Created by Ankur on 9/5/2015.
 */
Template.notes.helpers({
    notes: function() {
        return Notes.find({}, {sort: {createdAt: -1}});
    }


});

Template.home.rendered = function () {
    setTimeout(function() {
        var signin = $("#login-dropdown-list .dropdown-toggle");
        signin.html('Sign in <b class="caret"></b>');

        var signupLink = $("#signup-link");
        signupLink.remove();
    }, 300);

};

Template.userinfo.helpers({
	fullName: function() {
        console.log("profile.name ="+Meteor.user().profile.name);
		return Meteor.user().profile.name;
	}
});

