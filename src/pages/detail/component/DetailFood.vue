<template>
    <div class="food">
        <!-- <div class="food-out-wrap"> -->
            <div class="menu-wrap" ref="menu">
                <ul>
                    <li class="menu-li menu-hook" v-for="(item,index) in menuList" :key="index" :class="{active:index === menuIndex}" 
                    @click="selectMenu(index,$event)">
                        <span class="menu-item">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="food-wrap" ref="food">
                <div>
                    <div class="food-item food-hook" v-for="(item,index) in menuList" :key="index">
                        <h3 class="title">{{item.name}}</h3>
                        <div class="food-item-wrap" v-for="(food,i) in item.foods" :key="i">
                            <div class="food-img">
                                <img class="img" :src="food.image" alt="">
                            </div>
                            <div class="food-desc">
                                <h3 class="food-desc-title">
                                    {{food.name}}
                                </h3>
                                <div class="food-content">{{food.info}}</div>
                                <div class="food-sale">月售 {{food.sellCount}} 好评率 99.8%</div>
                                <div class="food-price">
                                    <span class="price">￥{{food.price}}</span>起  
                                </div>
                                <div class="cart-btn-wrap">
                                    <cart-btn :foodItem="food"></cart-btn>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        <!-- </div> -->
        
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import CartBtn from '@/common/CartBtn'
export default {
    name:"DetailFood",
    components:{
        CartBtn
    },
    // props:["menuList"],
    data(){
        return {
            listHeight:[],
            menuList:[],
            scrollY:0
        }
    },
    computed:{
        menuIndex(){
            for(var i = 0 ; i < this.listHeight.length ; i ++){
                if(!this.listHeight[i+1] || (this.scrollY >= this.listHeight[i] && this.scrollY < this.listHeight[i+1])){
                    return i
                }
            }
            return 0
        }
    },
    methods:{
        selectMenu(index,event){
            if(!event._constructed){
                return
            }
            console.log(index)
            var foodList = this.$refs.food.getElementsByClassName("food-hook");
            var foodItem = foodList[index];
            this.foodScroll.scrollToElement(foodItem,200)
        },
        _initBScroll(){
            var menuList = this.$refs.menu.getElementsByClassName("menu-hook")
            this.menuScroll = new Bscroll(this.$refs.menu,{
                click:true
            })
            this.foodScroll = new Bscroll(this.$refs.food,{
                click:true,
                probeType:3
            })
            this.foodScroll.on("scroll",(pos)=>{
                this.scrollY = Math.abs(Math.round(pos.y));

            })
        },
        _calcHeight(){
            var foodList = this.$refs.food.getElementsByClassName("food-hook")
            var height = 0;
            this.listHeight.push(height)
            for(var i = 0 ; i < foodList.length ; i ++){
                var foodItem = foodList[i]
                height += foodItem.clientHeight
                this.listHeight.push(height)
            }
        }
    },
    created(){
        this.$axios.get("/api/data.json").then(res=>{
            let menu = res.data.goods;
            let index = 0;
            menu.forEach(food=>{
                food.foods.forEach((item)=>{
                    index ++
                    item.gid = "id"+index
                })
            })
            this.menuList = menu;
            this.$nextTick(()=>{
                this._initBScroll()
                this._calcHeight()
            })
        })
        
    }
}
</script>
<style lang="scss" scoped>
    .food{
        position: absolute;
        display: flex;
        top: rem(140);
        left: 0;
        right: 0;
        bottom: rem(50);
        overflow: hidden;
        .menu-wrap{
            background-color: #f8f8f8;
            width: rem(80);
            .menu-li{
                text-align: center;
                padding: rem(16) rem(8);
                &.active{
                    background: #fff;
                    color:red;
                }
            }
            .active{
                background: #fff;
            }
            .menu-item{
                font-size: rem(12);
                
            }
        }
        .food-wrap{
            flex: 1;
            padding: 0 rem(10);
            min-width: 0;
            .food-item{
                .title{
                    font-size: rem(16);
                    padding: rem(10) 0;
                }
                .food-item-wrap{
                    display: flex;
                    padding: rem(10) 0;
                    .food-img{
                        width: rem(76);
                        height: rem(76);
                        .img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .food-desc{
                        flex:1;
                        padding: 0 rem(10);
                        font-size: rem(10);
                        min-width: 0;
                        color:#bbb;
                        position: relative;
                        .food-desc-title{
                            font-size: rem(14);
                            font-weight: 700;
                            color:#333;
                        }
                        .food-content{
                            padding: rem(8) 0;
                            @include ellipsis;
                        }
                        .food-sale{
                            padding: rem(3) 0;
                        }
                        .food-price{
                            padding: rem(8) 0;
                            color:red;
                        }
                        .price{
                            
                            font-size: rem(14);
                        }
                        .cart-btn-wrap{
                            position: absolute;
                            bottom: 0;
                            right: 0;
                        }
                    }

                }
            }
        }
    }
</style>


