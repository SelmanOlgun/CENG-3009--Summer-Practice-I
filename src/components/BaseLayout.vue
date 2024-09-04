<template>
    <div class="layout">
      <first-header></first-header>
      <div class="main-content">
        <vertical-sidebar></vertical-sidebar>
        <div class="screen-field">
          <user-header></user-header>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import FirstHeader from "../components/FirstHeader.vue";
  import VerticalSidebar from "../components/VerticalSidebar.vue";
  import UserHeader from "../components/UserHeader.vue";
  
  export default defineComponent({
    name: "BaseLayout",
    components: {
      FirstHeader,
      VerticalSidebar,
      UserHeader
    }
  });
  </script>
  
  <style scoped>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .main-content {
    display: flex;
  }
  
  .screen-field {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  </style>
  