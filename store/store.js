import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from '@/store/cart.js'
import moduleUser from '@/store/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    //挂载购物车的vuex模块，模块内成员的访问路径被调整为m_cart,例如
    //购物车模块中cart数组的访问路径是m_cart/cart
    'm_cart': moduleCart,
     'm_user': moduleUser
  }
})
export default store