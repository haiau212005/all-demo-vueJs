// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$sData = [
    {id: 1, name: 'hai anh'},
    {id: 2, name: 'mai'},
    {id: 3, name: 'hen'},
    {id: 4, name: 'van'}
]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
