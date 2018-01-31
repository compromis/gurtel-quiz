// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import Quiz from './Quiz'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  offset: -70
})
Vue.use(FBSignInButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Quiz/>',
  components: { Quiz }
})
