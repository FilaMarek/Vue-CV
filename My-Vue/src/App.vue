<template>
  <div class="wholeWebsite">
    <Header></Header>
    <main-Page></main-Page>
    <Footer :currYear="currYear"></Footer>
  </div>
</template>

<script>
let currYear = 0;
import mainPage from "./Components/mainPage.vue";
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
