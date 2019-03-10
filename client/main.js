import Vue from 'vue';
import App from '../imports/ui/layouts/App.vue';
import './main.html';

import { Meteor } from 'meteor/meteor';
import VueMeteorTracker from 'vue-meteor-tracker'
import routerFactory from '/imports/startup/router/router.js';
import VueProgress from 'vue-progress-path';


Vue.use(VueMeteorTracker)

Vue.use(VueProgress, {
  defaultShape: 'semicircle',
})

Meteor.startup(() => {

  const router = routerFactory.create();
  new Vue({
    el: '#app',
    router,
    ...App,
  });
});