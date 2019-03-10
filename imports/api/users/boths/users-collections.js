import { Mongo } from 'meteor/mongo';
import { UsersSchemas } from '/imports/api/users/boths/users-schema.js';


export const UsersCollection = new Mongo.Collection('Users');
UsersCollection.attachSchema(UsersSchemas);

UsersCollection.before.insert(function (userId, doc) {
    if (Meteor.isServer) {

    }
});

UsersCollection.after.insert(function (userId, doc) {
    if (Meteor.isServer) {

    }
});

UsersCollection.helpers({
    
});