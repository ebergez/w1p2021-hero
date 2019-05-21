import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Characters from './components/Characters.vue';
import Game from './components/Game.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/Game/:id',
      name: 'Game',
      component: Game
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
