import Vue from 'vue'
import Vuex from 'vuex'
import { SETCOUNT } from './mutation-types'

// 注册插件
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // 状态
  state: {
    count: 0,
    msg: 'Hello World'
  },
  getters: {
    // getter 类似于计算属性
    reverseMsg (state) {
      return state.msg.split('').reverse().join('')
    }
  },
  // 更改 state 的mutation
  mutations: {
    // 第一个参数是 state
    setCount (state) {
      state.count++
    },
    // 载荷 Payload  就是mutation的第二个参数
    setCount1 (state, n) {
      state.count += n
    },
    // 传递多个参数，可以使用对象的方式
    setCount2 (state, payload) {
      state.count += payload.n
    },
    // 使用 mutation-types 的方式，定义mutation的名字，防止出现错误
    [SETCOUNT] (state, payload) {
      state.count += payload.n
    },
    // 演示为什么mutation必须是同步的
    setCount4 (state) {

      setTimeout(() => {
        state.count++
      }, 2000);
    }
  },
  actions: {
    // context具有和store相同的属性和方法，内部可能会用到state和mutation
    setCount (context) {
      // 模拟异步操作
      setTimeout(() => {
        // 修改状态，提交mutaion
        context.commit('setCount')
      }, 2000);
    }
  }
})

export default store
