/**
 * Created by Ankur on 9/5/2015.
 */
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
            fullName: "Andrew Denison"
        }
    });

    var cc2 = Accounts.createUser({
        password: "defaultPass",
        email: "debragoldstein@phila.gov",
        profile: {
            fullName: "Debra Goldstein"
        }
    });

    var c1 = Accounts.createUser({
        password: "defaultPass",
        email: "jeffreyhackett@phila.gov",
        profile: {
            fullName: "Jeffrey Hackett",
            children: [cc1]
        }
    });

    var c2 = Accounts.createUser({
        password: "defaultPass",
        email: "nancygoldenberg@phila.gov",
        profile: {
            fullName: "Nancy Goldenberg",
            children: [cc2]
        }
    });

    Accounts.createUser({
        password: "defaultPass",
        email: "michaelnutter@phila.gov",
        profile: {
            fullName: "Michael Nutter",
            children: [c1, c2]
        }
    });

    //Meteor.users.createIndex({"profile.shute": 1});
}

Notes.remove({});
if(Notes.find().count()==0) {
    console.log("Initializing test notes");
    Notes.insert(
        {
            text: "Hello world!",
            contact: "ankur@420blaze.it",
            createdAt: new Date()
        }
    );
}