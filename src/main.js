import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/scss/main.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBY687_aL3sXHyuEpBInt8okyAbgy0i6YU',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
