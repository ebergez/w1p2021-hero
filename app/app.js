import './assets/scss/styles.scss'; //attention à l'ordre si on définit du style dans les components directement
import Vue from 'vue';
import router from './router';

new Vue({ router: router }).$mount('#root');
