import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  }
})

export default store
