import * as types from './types'
export default {
    increase_goods_to_cart:({commit},goods)=>{
        commit(types.INCREASE_GOODS_TO_CART,goods);
    },
    decrease_goods_from_cart:({commit},goods)=>{
        commit(types.DECREASE_GOODS_FROM_CART,goods);
    }
}