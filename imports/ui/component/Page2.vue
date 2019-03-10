<template>
  <div>
    <!-- <div class="main-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
  
          <div class="row">
            <input type="text" v-model="user_name" placeholder="Enter your name" >
          </div>
          <div class="row">
            <input type="text" v-model="user_email" placeholder="Enter your email" >
          </div>
          <div class="row">
            <input type="text" v-model="user_interest" placeholder="Area of Interest">
          </div>
          <div class="row">
            <input type="text" v-model="user_bio" placeholder="Add Bio here">
          </div>
          <div class="row">
            <button v-on:click="save" style="width:100px; padding:10px;margin:10px 0px 0px 520px;border-radius:30px">Save</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Default form register -->
    <form class="text-center border border-light p-5">

        <p class="h4 mb-4">Sign up</p>

        <div class="form-row mb-4">
            <div class="col">
                <!-- First name -->
                <input type="text" v-model="firstName" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
            </div>
            <div class="col">
                <!-- Last name -->
                <input type="text" v-model="lastName" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
            </div>
        </div>

        <!-- E-mail -->
        <input type="email" v-model="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

        <!-- Password -->
        <input type="password" v-model="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
        <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
            At least 8 characters and 1 digit
        </small>

        <!-- Phone number -->
        <input type="text" v-model="phoneNumber" id="defaultRegisterPhoneNumber" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock">
        <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
            Optional - for two step authentication
        </small>

        <!-- Newsletter -->
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
            <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
        </div>

        <!-- Sign up button -->
        <button class="btn btn-info my-4 btn-block" type="submit" @click="addUser">Sign up</button>

        <!-- Social register -->
        <p>or sign up with:</p>

        <a type="button" class="light-blue-text mx-2">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a type="button" class="light-blue-text mx-2">
            <i class="fab fa-twitter"></i>
        </a>
        <a type="button" class="light-blue-text mx-2">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a type="button" class="light-blue-text mx-2">
            <i class="fab fa-github"></i>
        </a>

        <hr>

        <!-- Terms of service -->
        <p>By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">terms of service</a>
        </p>

    </form>
    <!-- Default form register -->
  </div>
</template>

<script>
  import {
    Meteor
  } from 'meteor/meteor';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
      }
    },
    meteor: {
  
    },
    methods: {
      addUser: function() {
        let details = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber
        }
  
  console.log("details", details)
  
        Meteor.call('users/add-users', details, function (err, result) {
            if (err) console.log(err);
        });
      }
    }
  
  }
</script>




<style>
  
</style>