import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { CreatedAtSchemas } from '/imports/api/common/both/common-schema.js';



// export const BranchesSchemas = new SimpleSchema([CreatedAtSchemas, CreatedBySchemas, {
//     name: {
//         type: String,
//         index: 1
//     },
//     partnerId: {
//         type: String,
//         index: 1
//     },
//     adminId: {
//         type: String,
//         index: 1,
//     },
//     agents: {
//         type: [String], //array of agent ids.
//         index: 1,
//         optional: true
//     }
// }]);

export const PostsSchemas = new SimpleSchema([CreatedAtSchemas, {
    postTitle: {
        type: String,
        optional: true
    }
}]);

