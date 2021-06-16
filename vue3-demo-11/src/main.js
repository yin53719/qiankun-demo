import "./public-path";

import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


function render(h) {
    const app = createApp(App);
    app.use(ElementPlus)
    app.use(router).use(store);
  
    app.mount('#appVue')
      //   // vue-devtools 调试
  if (window.__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === "development") {
    // vue-devtools  加入此处代码即可
    // After you create app
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
    let instanceDiv = document.createElement("div");
    instanceDiv.__vue__ = app;
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
    app = null;
//   router = null;
}
