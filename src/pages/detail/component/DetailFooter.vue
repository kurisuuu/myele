<template>
    <div class="footer">
        <div class="cart">
            <div class="cart-content" :class="{active:cartCount>0}">车
                <span class="cart-count" v-show="cartCount>0">{{cartCount}}</span>
            </div>
        </div>
        <div class="cart-right">
            <div class="total-money">
                <p class="total">￥{{totalPrice}}</p>
                <p class="send-desc">另需要配送费￥4</p>
            </div>
            <div class="pay-btn" :class="{active:totalPrice>=20}">
                {{payDesc}}
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapState} from 'vuex'
export default {
    name:"DetailFooter",
    computed:{
        ...mapGetters({
            cartCount:'cart/cartCount',
            totalPrice:'cart/totalPrice',
            payDesc:'cart/payDesc'
        })
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
    .footer{
        position: fixed;
        bottom: 0;
        height: rem(50);
        width: 100%;
        background: #131d26;
        .cart{
            position: absolute;
            width: rem(62);
            height: rem(62);
            border-radius: 50%;
            top: rem(-14);
            left: rem(20);
            background: #131d26;
            .cart-content{
                width: rem(46);
                height: rem(46);
                background: #2b343c;
                position: absolute;
                top:rem(8);
                left:rem(8);
                border-radius: 50%;
                text-align: center;
                line-height: rem(46);
                font-weight: bold;
                font-size: rem(28);
                color: #80858a;
                &.active{
                    background-color:$bgColor;
                    color:#fff;
                }
                .cart-count{
                    position: absolute;
                    background: red;
                    font-size: rem(12);
                    line-height: rem(14);
                    padding:rem(1) rem(5);
                    border-radius: 30%;
                    text-align: center;
                    color: #fff;
                    top: rem(-5);
                }
            }

        }
        .cart-right{
            color:#8c8e91;
            height: 100%;
            padding-left: rem(92);
            display: flex;
            .total-money{
                flex: 1;
                .total{
                    font-size: rem(16);
                    padding: rem(4);
                    color: #fff;
                }
                .send-desc{
                    font-size: rem(12);
                    padding: rem(4);
                }

            }
            .pay-btn{
                width: rem(100);
                height: 100%;
                background: #2b333b;
                line-height: rem(50);
                font-size: rem(12);
                text-align: center;
                &.active{
                    background-color: #38ca73;
                    color:#fff;
                    font-size: rem(14);
                    font-weight: 700;
                }
            }
        }
    }
</style>

