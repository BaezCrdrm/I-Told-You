import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './registerServiceWorker'
import OfficeUIFabricVue from 'office-ui-fabric-vue';
import Clipboard from 'v-clipboard';

Vue.use(OfficeUIFabricVue);
Vue.use(Clipboard);

// Styles
import 'office-ui-fabric-vue/dist/index.css';
import './assets/styles/fabric.min.css'

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
