import * as c from './types'
import Vue from 'vue'
export default {
    //添加
    [c.INCREASE_GOODS_TO_CART](state,goods){
        if(!state.cart[goods.gid]){
            Vue.set(state.cart, goods.gid, goods);
            Vue.set(state.cart[goods.gid], 'count', 1);
        }else{
            let count = state.cart[goods.gid].count;
            count ++;
            Vue.set(state.cart[goods.gid], 'count', count);
        }
    },
    //减少
    [c.DECREASE_GOODS_FROM_CART](state,goods){
        goods.count -- ;
        if(goods.count === 0){
            Vue.delete(state.cart,goods.gid)
        }
    }
}