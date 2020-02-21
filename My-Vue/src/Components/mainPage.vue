<template>
  <div class="test">
    <img src="../assets/Marek-Fila.jpg" alt />
    <div class="mainView">
      <div class="myImages"></div>
      <Leftside :age="age"></Leftside>
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

<style>
div.mainView {
  height: 246px;
  width: 350px;
  border: 2px solid black;
  float: right;
}

img {
  width: 250px;
  height: 250px;
  margin-right: 5px;
}
</style>


