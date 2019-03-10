<template>
  <div class="home">
    <h1>Welcome Home</h1>
    <p>Create awesome apps with vuejs &amp; meteor! <a href="https://github.com/Akryum/meteor-vue-component">More info</a></p>
    <img src="/img/vue.png" class="logo"/><img src="/img/meteor.png" class="logo"/>

    <input  v-model="postText" @keyup.enter="savePost" size="lg" class="tc"  type="text" placeholder="Inter post"/>

    <div v-for="post in posts">
        {{post.postTitle}}
    </div>

  </div>
</template>

<script>
    import {Meteor} from 'meteor/meteor'
    import Vue from 'vue';
    import { PostsCollection } from '/imports/api/posts/boths/posts-collection.js';

    export default {
        data() {
            return {
              postText: '',
              checkedAt: new Date(),
              limit: 10
            }
        },
        meteor: {
          $subscribe: {
                'postsList': function () {
                    return [this.limit, this.checkedAt];
                }
            },
            posts: function(){

                let posts = PostsCollection.find({}, {sort: { createdAt: -1 }});
                return posts;
            }
        },
        methods: {
          savePost: function(){
              let instance = this;

              if (instance.postText) {
                  Meteor.call('posts/add-posts', instance.postText, function (err, result) {
                      if (err) console.log(err);
                      else instance.postText = '';
                  });
              }
          }
        },
        mounted () {

        }
    }

</script>

<style scoped>
.home {
  text-align: center;
}
img.logo {
  max-width: 101px;
  margin: 12px;
}
</style>