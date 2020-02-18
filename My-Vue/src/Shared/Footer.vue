<template>
  <div class="menu">
    <p>&copy; {{currYear}}</p>
  </div>
</template>

<script>
let currentYear = new Date().getFullYear();

export default {
  created: function() {
    this.currentYearShow();
  },
  methods: {
    currentYearShow() {
      this.currentYearShow = currentYearShow;
    }
  }
};
</script>

<style >
</style>
