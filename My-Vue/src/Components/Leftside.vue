<template>
  <div class="wholeLeftSide">
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
    <div class="socialmedia">
      <i class="fab fa-github-square" id="iconSocial"></i>
      <i class="fab fa-linkedin" id="iconSocial"></i>
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

.aboutMe {
  margin-top: 40px;
}

#iconSocial {
  cursor: pointer;
}
</style>


