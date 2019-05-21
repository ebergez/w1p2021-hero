<template>
<div>
  <h1>{{ step.title }}</h1>

  <router-link v-for="action in step.actions"
  :to="action.to.toString()">
    {{ action.label }}

    <div></div>
  </router-link>
</div>
</template>

<script>
  import game from '../data.json';

  export default {
    data: function () {
      return {
        step: this.getStep()
      }
    },
    mounted() {
      console.log('coucou');
    },
    methods: {
      getStep() {
        return game.steps.find(
          step => step.id === parseInt(this.$route.params.id)
        )
      },
      doEffects(action) {
        console.log(action)
      }
    },
    watch: {
      '$route.params.id' (to,from) {
        this.step = this.getStep()
      }
    }
  }
</script>
