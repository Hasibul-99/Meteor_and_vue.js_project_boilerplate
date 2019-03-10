import { Mongo } from 'meteor/mongo';
import { PostsSchemas } from '/imports/api/posts/boths/posts-schema.js';


export const PostsCollection = new Mongo.Collection('posts');
PostsCollection.attachSchema(PostsSchemas);

PostsCollection.before.insert(function (userId, doc) {
    if (Meteor.isServer) {

    }
});

PostsCollection.after.insert(function (userId, doc) {
    if (Meteor.isServer) {

    }
});

PostsCollection.helpers({
    
});