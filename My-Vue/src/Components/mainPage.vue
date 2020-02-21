<template>
  <div>
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
  width: 100%;
  border: 2px solid black;
  float: right;
}
.socialmedia {
  font-size: 40px;
  margin-left: 2px;
}

.myBasicInfo {
  margin-left: 34%;
  margin-top: 5%;
  float: left;
}

.footer {
  margin-right: 50%;
}

</style>


