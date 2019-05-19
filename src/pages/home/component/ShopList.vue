<template>
    <div class="shoplist-wrap">
        <div class="list-item" v-for="item in shopList" :key="item.id" @click="routerTo(item.id)">
            <div class="shop-info-wrap">
                <div class="shop-logo">
                    <img class="shop-img" v-lazy="item.imgUrl" alt="">
                </div>
                <div class="shop-desc">
                    <h3 class="shop-title">{{item.title}}</h3>
                    <div class="shop-other-info">
                        <div class="other-left">
                            <img :src="item.star" alt="">
                            4.8 月售 {{item.sale}}
                        </div>
                        <div class="other-right">
                            <span class="send-logo">蜂鸟专送</span>
                        </div>
                    </div>
                    <div class="shop-other-info">
                        <div class="other-left">￥20起送 | 配送费 ￥5</div>
                        <div class="other-right">286m|20分钟</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ShopList",
    props:["shopList"],
    methods:{
        routerTo(id){
            this.$router.push({name:"DetailFood",params:{id:id}})
        }
    }
}
</script>
<style lang="scss" scoped>
    .shoplist-wrap{
        padding: rem(10) rem(10);
        font-size: rem(14);
        .list-item{
            padding-top: rem(10);
            padding-bottom: rem(20);
            border-bottom: 1px solid #eee;
            .shop-info-wrap{
                display: flex;
                .shop-logo{
                    width: rem(76);
                    .shop-img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .shop-desc{
                    flex: 1;
                    font-size: rem(10);
                    padding-left: rem(6);
                    .shop-title{
                        font-size: rem(16);
                        padding: rem(5);
                    }
                }
            }
        }
        .shop-other-info{
            display: flex;
            justify-content: space-between;
            padding: rem(5);
        }
        .send-logo{
            display: inline-block;
            background: $bgColor;
            color: #fff;
            font-size: rem(10);
            padding: rem(2);
        }
    }
</style>
