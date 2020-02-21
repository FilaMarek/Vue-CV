<template>
  <div class="jk-container">
    <hComp></hComp>
    <Header></Header>

    <div class="jk-content">
      <router-view style="z-index: 999;"></router-view>
      <Footer :currYear="currYear"></Footer>
    </div>
  </div>
</template>

<script>
let currYear = 0;

import Header from "./Shared/Header.vue";
import Footer from "./Shared/Footer.vue";
import HeaderComponent from "./Pages/Shared/HeaderComponent.vue";

export default {
  data: function() {
    return {
      currYear: "0"
    };
  },

  components: {
    Header: Header,
    Footer: Footer,
    hComp: HeaderComponent
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
<style lang="scss">
</style>

