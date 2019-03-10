import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import { Accounts } from 'meteor/accounts-base';

import { UsersCollection } from '/imports/api/users/boths/users-collections.js';

Meteor.methods({
    'users/add-users'(params){

        check(params, Match.Maybe(Object));              //throw error when params is not string or not found
        check(params.firstName, String);
        check(params.email, String);
        check(params.password, String);

        let userObject = {email: params.email, password: params.password};
        userObject.profile = {name: params.firstName};

        let newUserId = Accounts.createUser(userObject);

        if (newUserId) {

            let update = {};
            
                userData['profile.firstName'] = this.firstName,
                userData['profile.lastName'] = this.lastName,
                userData['profile.phoneNumber'] = this.phoneNumber
           

            // if(_.size(userData)){
                Meteor.users.update({_id:newUserId}, {$set:userData});
            // }


            // Accounts.sendVerificationEmail(newUserId);
            return true;
        }
    }
});



if (Meteor.isClient) {

    function uhrzeit() {

        let a = 1;
      console.log("aaa", a + 1);
    };

    Meteor.setInterval(uhrzeit, 1000);
  }