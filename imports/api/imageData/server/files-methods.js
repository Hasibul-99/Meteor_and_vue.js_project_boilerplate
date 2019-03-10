import { Meteor } from 'meteor/meteor';
import UserFiles from '/imports/api/imageData/boths/files-collection.js'

Meteor.methods({
    
    'RemoveFile'(id) {
        UserFiles.remove({_id: id}, function (error) {
            if (error) {
              console.error("File wasn't removed, error: " + error.reason)
            } else {
              console.info("File successfully removed");
            }
        });

    }
});