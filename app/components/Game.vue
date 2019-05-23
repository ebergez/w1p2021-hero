<template>
<div>
  <img v-bind:src="step.backgroundImage" alt="" class="backgroundImage">
  <section class="choicesBox">
  <h1 class="screenText">{{ step.title }}</h1>
  <div class="choicesList">
  <router-link v-for="action in step.actions"
  :to="action.to.toString()" class="choices">
    {{ action.label }}
    </div>
  </router-link>
  </section>
    
  
</div>
</template>

<script>
  import game from '../data.json';

  export default {
    data: function () {
      return {
        step: this.getStep(),
      }
    },
    mounted() {
      console.log('coucou');
      console.log( this.getStep());
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
