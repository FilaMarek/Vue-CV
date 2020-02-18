<template>
  <div class="mainView">
    <Leftside :age="age"></Leftside>
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
  height: 500px;
  width: 350px;
  border: 2px solid black;
}
</style>


