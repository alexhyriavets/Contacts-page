import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/scss/main.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-C6hWh4esJM5e3VtIXqHwYGxD2qRwuoQ',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
