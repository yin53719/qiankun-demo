import "./public-path";
import Vue from "vue";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;




let instance = null;
function render(props = {}) {

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount("#appvue22");

  // vue-devtools 调试
  if (window.__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === "development") {
    // vue-devtools  加入此处代码即可
    // After you create app
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = instance.constructor;
    let instanceDiv = document.createElement("div");
    instanceDiv.__vue__ = instance;
    document.body.appendChild(instanceDiv);
  }
}


// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main 1111111111111111111", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  // instance.$el.innerHTML = "";
  instance = null;
  // router = null;
}


