import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSplit from 'vue-split-panel'
Vue.use(ElementUI);
Vue.use(VueSplit)


new Vue({
  el: '#app',
  render: h => h(App)
})
