<template>
    <div class="cart-wrap">
        <div class="cart-decrease" v-show="foodItem.count>0" @click="handleDecrease(foodItem)">-</div>
        <div class="cart-count" v-show="foodItem.count>0" >{{foodItem.count}}</div>
        <div class="cart-increase" @click="handleIncrease(foodItem)">+</div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"CartBtn",
    props:{
        foodItem:Object
    },
    computed:{
        
    },
    methods:{
        ...mapActions({
            handleIncrease:"cart/increase_goods_to_cart",
            handleDecrease:"cart/decrease_goods_from_cart"
        }),
        // handleIncrease(){
        //     if(!this.foodItem.count){
        //         this.$set(this.foodItem,'count',1);
        //     }else{
        //         this.foodItem.count++
        //     }
        // },
        // handleDecrease(){
        //     this.foodItem.count --;
        // }
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>
    .cart-wrap{
        .cart-decrease,.cart-increase{
            display: inline-block;
            width: rem(20);
            height: rem(20);
            border-radius: 50%;
            text-align: center;
            font-size: rem(20);
            border: rem(2) solid $bgColor;
        }
        .cart-count{
            display: inline-block;
            width: rem(28);
            text-align: center;
            line-height: rem(20);
            font-size: rem(16);
        }
        .cart-decrease{
            color:$bgColor;
            font-weight: bold;
            line-height: rem(18);
        }
        .cart-increase{
            background: $bgColor;
            line-height: rem(20);
            color:#fff;

        }
    }
</style>


