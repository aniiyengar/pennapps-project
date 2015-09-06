/**
 * Created by Ankur on 9/5/2015.
 */

process.env.MAIL_URL="smtp://shuteit.mail%40gmail.com:Chutepenn@smtp.gmail.com:465/";



// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
    service: "google"
});
ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "122213843316-q6f1ql27f6ge3mg1t3afcfalho9lm1q6.apps.googleusercontent.com",
    loginStyle: "popup",
    secret: "Cch_yHdIBO-ACiFTpw5hybN1"
});

/*Accounts.onCreateUser(function(options, user) {
    // We still want the default hook's 'profile' behavior.
    if (options.profile)
        user.profile = options.profile;
    user.profile.fullName =
    return user;
});*/

Meteor.users.remove({});
if(Meteor.users.find().count()==0) {

    console.log("Initializing test users");

    var cc1 = Accounts.createUser({
        password: "defaultPass",
        email: "andrewdenison@phila.gov",
        profile: {
            name: "Andrew Denison",
            category: "Parks & Recreation"
        }
    });

    var c1 = Accounts.createUser({
        password: "defaultPass",
        email: "jeffreyhackett@phila.gov",
        profile: {
            name: "Jeffrey Hackett",
            children: [cc1],
            category: "Parks & Recreation"
        }
    });

    var cc2 = Accounts.createUser({
        password: "defaultPass",
        email: "debragoldstein@phila.gov",
        profile: {
            name: "Debra Goldstein",
            category: "Energy"
        }
    });

    var c2 = Accounts.createUser({
        password: "defaultPass",
        email: "nancygoldenberg@phila.gov",
        profile: {
            name: "Nancy Goldenberg",
            children: [cc2],
            category: "Energy"
        }
    });

    Accounts.createUser({
        password: "defaultPass",
        email: "michaelnutter@phila.gov",
        profile: {
            name: "Michael Nutter",
            children: [c1, c2]
        }
    });

    //Meteor.users.createIndex({"profile.shute": 1});
}

Notes.remove({});
if(Notes.find().count()==0) {
    //console.log("Initializing test notes");
}