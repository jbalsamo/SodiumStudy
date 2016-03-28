Questions = new Mongo.Collection("questions");

if (Meteor.isClient) {
    Meteor.subscribe("questions");
}

if (Meteor.isServer) {
    console.log("Publishing data");
    Meteor.publish("questions", function () {
        return Questions.find({
            "study": "Sodium"
        });
    });
}