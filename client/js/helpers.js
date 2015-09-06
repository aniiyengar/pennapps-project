/**
 * Created by Ankur on 9/5/2015.
 */
Template.notes.helpers({
    notes: function() {
        return Notes.find();
    }
});

Template.home.rendered = function () {
    setTimeout(function() {
        var signin = $("#login-dropdown-list .dropdown-toggle");
        signin.html('Sign in <b class="caret"></b>');

        var signupLink = $("#signup-link");
        signupLink.remove();
    }, 500);

};

Template.userinfo.helpers({
	fullName: function() {
		return Meteor.user().profile.name;
	}
});

