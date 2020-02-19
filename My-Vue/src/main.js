import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.scss'
import './assets/css/_config.scss'
import router from './router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
