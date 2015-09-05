/**
 * Created by Ankur on 9/5/2015.
 */
Router.onBeforeAction(function(pause) {
    if (!Meteor.userId()) {
        this.redirect('/login');
        return pause;
    }
    this.next();
}, {
    only: ['notes']
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/login', function() {
    this.render('login');
});

Router.route('invite', function() {
    this.render('invite');
});

Router.route('/join/:invid', function() {
    this.render('join');
});

Router.route('/create', function() {
    this.render('create');
});

Router.route('/notes', function() {
    this.render('notes');
});