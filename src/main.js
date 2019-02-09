import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/scss/main.scss'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCLbie2F2ZYl7Bn-qV9lnuaWA5f7cbhvdI',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
