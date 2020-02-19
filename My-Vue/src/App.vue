<template>
  <div class="jk-container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Shared/Header.vue";

export default {
  components: {
    Header: Header
  }
};
</script>

<style>
</style>
