<template>
  <div class="big-header">
    <h1 class="gameTitle">{{ message }}</h1>
    <br />
    <div class="buttons">
    <router-link class="button" to="/game/1">Jouer</router-link> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Emra's cave"
    };
  }
};
</script>
