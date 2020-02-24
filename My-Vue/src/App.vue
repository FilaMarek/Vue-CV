<template>
  <div class="jk-container">
    <hComp :img="img"></hComp>
    <Header></Header>

    <div class="jk-content">
      <router-view :key="$route.fullPath"></router-view>
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
      currYear: "0",
      img: "",
    };
  },

  components: {
    Header: Header,
    Footer: Footer,
    hComp: HeaderComponent
  },
  created: function() {
    this.CurrentYears();
    this.updateComponenets();
  },
  methods: {
    CurrentYears() {
      currYear = new Date().getFullYear();
      this.currYear = currYear;
    },
    updateComponenets(){
      let that = this;
      this.$nextTick(function(){
        that.img = this.$route.name;
    })
    }
  },
  updated: function (){
    this.updateComponenets();
  }
};
</script>
<style lang="scss">
</style>

