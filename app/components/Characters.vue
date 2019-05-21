<template>
  <div class="big-header">
    <h1>Choix du personnage</h1>
    <h2>Je suis un h2 sans le style de l'enfant h2</h2>
    <br>

    <Character

      v-for="character in characters"
      v-bind:character="character"
      v-bind:key="character.id"

    ></Character>

    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>

<script>
import Character from "./Character.vue";

export default {
  data: function() {
    return {
      characters: [
        {
          name: "Yves",
          speciality: "JS",
          main: true
        },
        {
          name: "Bcalou",
          speciality: "CSS"
        }
      ]
    };
  },
  components: {
    Character
  }
};
</script>