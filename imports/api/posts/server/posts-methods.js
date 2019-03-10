import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { PostsCollection } from '/imports/api/posts/boths/posts-collection.js';

Meteor.methods({
    'posts/add-posts'(postTitle){

        check(postTitle, String);              //throw error when postText is not string or not found

        if(postTitle) PostsCollection.insert(
                {
                    postTitle: postTitle
                }
        )
    }
});