import { createStore } from 'vuex';
import moduleA from './moduleA';

// 创建一个新的 store 实例
const store = createStore({
  modules: {
    a: moduleA,
  },
});

export default store;
