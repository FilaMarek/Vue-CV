<template>
  <div class="wholeWebsite">
    <Header></Header>
    <main-Page></main-Page>
    <Footer currYear="currYear"></Footer>
  </div>
</template>

<script>
let currentYear = new Date().getFullYear();

import mainPage from "./Components/mainPage.vue";
import Header from "./Shared/Header.vue";
import Footer from "./Shared/Footer.vue";

export default {
  data: function() {
    return {
      currYear: "1982"
    };
  },

  components: {
    mainPage: mainPage,
    Header: Header,
    Footer: Footer
  },
  methods: {
    currYear() {
      currYear = currentYear;
      return currYear;
    }
  }
};
</script>

<style>
</style>
