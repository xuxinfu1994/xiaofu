import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'

// import './assets/style/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
