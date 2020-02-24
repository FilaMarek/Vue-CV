<template>
  <div>
    <div class="jk-photo-wrap">
      <div class="jk-photo">
        <img src="../assets/Marek-Fila.jpg" class="jk-fluid"/>
      </div>
      <div class="jk-photo-content">
        <div class="myImages"></div>
        <Leftside :age="age"></Leftside>
      </div>
    </div>
  </div>
</template>

<script>
import Leftside from "./Leftside.vue";

let age = 0;
const Birth = 1991;
let currentYear = new Date().getFullYear();

export default {
  data: function() {
    return {
      age: ""
    };
  },
  components: {
    Leftside: Leftside
  },
  created: function() {
    this.CalcAge();
  },
  methods: {
    CalcAge() {
      age = currentYear - Birth;
      console.log(age);
      this.age = age;
    }
  }
};
</script>

<style lang="scss">
  @import '../assets/css/_config.scss';
  .jk-photo-wrap{
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: $primary2;
    
    .jk-photo{
      max-width: 45%;
      width: 45%;
      clip-path: polygon(0% 0%, 100% 0%, 55% 100%, 0% 100%);
    }
    .jk-photo-content{
      width: 75%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: $main;
    }
  }
</style>


