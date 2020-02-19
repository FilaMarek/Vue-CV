<template>
  <div class="details">
    <div class="titles">
      <h2>Basic Info:</h2>
      <h2>Languages:</h2>
      <h2 class="aboutMe">About Me:</h2>
    </div>
    <div class="basicinfo">
      <p>Marek Fila</p>
      <p>English Fluent, Polish Fluent.</p>
      <p>I am {{ age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["age"]
};
</script>

<style scoped>
.details {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
}
div.titles {
  width: 40%;
}
div.basicinfo {
  width: 49%;
  align-self: center;
}
.basicinfo p {
  margin-top: 25px;
  margin-bottom: 30px;
  width: 100%;
}
.basicinfo img {
  width: 30px;
  height: 30px;
}
.aboutMe {
  margin-top: 40px;
}
</style>


