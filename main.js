import App from './App'
import store from '@/store';

// #ifndef VUE3
import Vue from 'vue'
// main.js
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})

// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)

let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif