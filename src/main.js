import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import './assets/styles/fabric.min.css'
// import Fabric from '@johannes-z/office-ui-fabric-vue'
// import '@johannes-z/office-ui-fabric-vue/dist/office-ui-fabric-vue.css'
 
// Vue.use(Fabric)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
