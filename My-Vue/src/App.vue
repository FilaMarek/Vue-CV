<template>
  <div class="jk-container">
    <Header></Header>

    <router-view></router-view>

  </div>
</template>

<script>



import Header from "./Shared/Header.vue";
import Footer from "./Shared/Footer.vue";

export default {
  data: function() {
    return {
      currYear: "0"
    };
  },

  components: {

    mainPage: mainPage,
    Header: Header,
    Footer: Footer
  },
  created: function() {
    this.CurrentYears();
  },
  methods: {
    CurrentYears() {
      currYear = new Date().getFullYear();
      this.currYear = currYear;
    }

  }
};
</script>

<style>
</style>
