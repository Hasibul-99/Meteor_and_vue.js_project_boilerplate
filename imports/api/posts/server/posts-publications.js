import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { PostsCollection } from '/imports/api/posts/boths/posts-collection.js';

Meteor.publishComposite('postsList', function (limit) {
    // this.unblock();

    check(limit, Match.Maybe(Number));

    return {
        find() {
            return PostsCollection.find({});
        },
        children: []
    }
});