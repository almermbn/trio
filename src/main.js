import Vue from 'vue'
import App from './App.vue'
import { installComponents } from './'
import i18n from './locales'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)

installComponents(Vue)
new Vue({
  render: (h) => h(App),
  i18n
}).$mount('#app')
