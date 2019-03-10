import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const CreatedAtSchemas = new SimpleSchema({
    createdAt: {
        type: Date,
        // denyUpdate: true,
        // index: 1,
        optional: true,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    }
});

// export const CreatedBySchemas = new SimpleSchema({
//     createdBy: {
//         type: String,
//         denyUpdate: true,
//         index: 1,
//         optional: true,
//         autoValue: function () {
//             if (this.isInsert) {

//                 if (this.userId) return this.userId;
//                 else return "SYSTEM";
//             }
//         }
//     }
// });