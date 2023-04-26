import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/css/commend.css';
import { Uploader } from 'vant';
import router from './router/router';

import _ from 'lodash'
Vue.prototype._ = _

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Uploader);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
