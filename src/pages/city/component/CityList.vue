<template>
    <div class="list-wrapper" ref="wrapper">
        <div>
            <div class="list-item" v-for="(item,key,index) in cities" :ref="key" :key="index">
                <h3 class="letter">{{key}}</h3>
                <ul class="list">
                    <li class="city" v-for="city in item" @click="handleChangeCity(city.name)" :key="city.id">{{city.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:"CityList",
    props:["cities","cityKey"],
    data(){
        return {
        }
    },
    methods:{
        changeLettter(key){
            this.scroll.scrollToElement(this.$refs[key][0])
        },
        handleChangeCity(city){
           this.chageCity(city);
           this.$router.push({path:"/"});
        },
        ...mapMutations({
            chageCity:"city/CHANGE_CITY"
        })
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs['wrapper'],{
            probeType:3,
            click:true
        })
    }
}
</script>
<style lang="scss" scoped>
    .list-wrapper{
        font-size: rem(14);
        color:#666;
        position: absolute;
        top:rem(100);
        bottom: 0;
        left: 0;
        right:0;
        overflow: hidden;
        .list-item{
            .letter{
                height: rem(42);
                line-height: rem(42);
                background: #f5f5f5;
                padding: 0 rem(15);
                @include border(#ddd);
            }
            .city{
                height: rem(50);
                line-height: rem(50);
                margin-left: rem(20);
                @include border(#eee);
            }
        }
    }
    .letter-wrapper{
        position: absolute;
        display: flex;
        right: rem(10);
        // right: 0;
        top: 0;
        bottom: 0;
        flex-direction: column;
        justify-content: center;
        font-size: rem(12);
        color: #999;
        z-index: 9;
        .letter{
            padding: rem(4);
        }
    }
</style>


