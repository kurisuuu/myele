import Vue from 'vue'
import vuex from 'vuex'

import cart from './cart'
import city from './city'

Vue.use(vuex)
export default new vuex.Store({
    modules:{
        cart,
        city
    }
})