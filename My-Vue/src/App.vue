<template>
  <div class="jk-container">
    <Header></Header>
    <div class="myBasicInfo">
      <router-view></router-view>
    </div>
    <Footer :currYear="currYear"></Footer>
  </div>
</template>

<script>
let currYear = 0;

import Header from "./Shared/Header.vue";
import Footer from "./Shared/Footer.vue";

export default {
  data: function() {
    return {
      currYear: "0"
    };
  },

  components: {
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

