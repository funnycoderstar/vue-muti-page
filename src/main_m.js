import Vue from 'vue'
import App from './App_m.vue'
import router from './router_m'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
