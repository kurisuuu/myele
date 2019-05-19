import * as c from './types'
export default {
    //添加
    [c.CHANGE_CITY](state,payload){
        state.city = payload
        localStorage.setItem("city",payload)
    },
}