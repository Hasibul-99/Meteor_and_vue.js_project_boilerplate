import { Meteor } from 'meteor/meteor';
import UserFiles from '/imports/api/imageData/boths/files-collection.js'

if (Meteor.isClient) {
    Meteor.subscribe('files.images.all');
}
  
if (Meteor.isServer) {
    Meteor.publish('files.all', function () {
    return UserFiles.find().cursor;
    });
}