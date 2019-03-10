import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { CreatedAtSchemas } from '/imports/api/common/both/common-schema.js';

export const UsersSchemas = new SimpleSchema([CreatedAtSchemas, {
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    "emails.$.token": {
        type: String,
        optional: true
    },
    "emails.$.expires": {
        type: Date,
        optional: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String,
        optional: true
    }
}]);