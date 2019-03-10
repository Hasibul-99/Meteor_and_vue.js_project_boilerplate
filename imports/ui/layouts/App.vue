<template>
  <div class="app-layout">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from '/imports/ui/component/appMenu.vue';
export default {
  components: {
   "app-menu": AppMenu
  }
}
</script>