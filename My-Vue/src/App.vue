<template>
  <div class="wholeWebsite">
    <Header></Header>
    <main-Page></main-Page>
  </div>
</template>

<script>
import mainPage from "./Components/mainPage.vue";
import Header from "./Shared/Header.vue";

export default {
  components: {
    mainPage: mainPage,
    Header: Header
  }
};
</script>

<style>
</style>
