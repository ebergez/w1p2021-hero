<template>
  <article
    :class="{'character--main': character.main}"
  >
    <h2>{{ character.name }}<h2>

    <transition name="fade">
    <h3 v-if="show">{{ character.speciality }}<h3>
    </transition>
  </article>
</template>

<style scoped>
  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  h3 {
    font-size: 20px;
    text-decoration: underline;
  }

  .fade-enter-active {
    transition: opacity 10s;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .character--main {
    border: red 2px solid;
  }
</style>

<script>
export default {
  props: ['character'],
  data: function() {
    return {
      show: false
    }
  },
  mounted: function() {
    console.log('mounted');
    setInterval(() => {
      this.show = true;
    }, 2000);
  }
};
</script>