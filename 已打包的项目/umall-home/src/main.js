// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 移动端适配
import "./assets/js/rem";
import "./assets/css/reset.css"

Vue.config.productionTip = false
// 全局图片地址前缀
Vue.prototype.$preImg = "";

// 全局组件
import comComponents from "./components/comComponents.js";
//  实例化每一个全局组件
for(let i in comComponents){
  Vue.component(i,comComponents[i])
};

// 状态管理
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
