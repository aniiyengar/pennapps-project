/**
 * Created by Ankur on 9/5/2015.
 */
Router.route('/', function () {
    this.render('home');
});

Router.route('/login', function() {
    this.render('login');
});