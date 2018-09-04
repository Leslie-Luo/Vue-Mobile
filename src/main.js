import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import api from "./api"; // 导入api接口

Vue.prototype.$api = api;

require("./mock");

NProgress.configure({ showSpinner: false }); // NProgress Configuration

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(from.name + " ==> " + to.name);
  next();
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
