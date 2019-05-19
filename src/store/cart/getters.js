export default{
    cartCount:(state)=>{
        let cart = state.cart;
        let count = 0;
        for(var key in cart){
            count += cart[key].count;
        }
        return count
    },
    totalPrice:(state)=>{
        let cart = state.cart;
        let money = 0;
        for(let key in cart){
            money += cart[key].count * cart[key].price;
        }
        return Number(money)
    },
    payDesc:(state)=>{
        let cart = state.cart;
        let money = 0;
        for(let key in cart){
            money += cart[key].count * cart[key].price;
        }
        if(money >= 20){
            return '去结算'
        }else{
            return `还差￥${20-money}起送`
        }
        

    }
}