import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import Datetime from 'vue-datetime'
import VueLuxon from "vue-luxon";
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)
Vue.use(VueLuxon, {
  input: {
      zone: "utc",
      format: "iso"
  },
  output: "short"
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
