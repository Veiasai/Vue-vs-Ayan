import Vue from 'vue'
import App from './App.vue'

import { Menu, Button } from 'ant-design-vue';

Vue.use(Menu)
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
