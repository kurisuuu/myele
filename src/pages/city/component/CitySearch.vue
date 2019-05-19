<template>
    <div>
        <div class="search-wrap">
            <div class="input-wrap">
                <i class="iconfont search-icon">&#xe632;</i>
                <input v-model="keyworld" type="text" class="input" placeholder="请输入城市名称或拼音">
            </div>
        </div>
        <div class="city-list" v-show="keyworld" ref="wrapper">
            <div>
                <ul class="search-ul">
                    <li class="search-city" v-for="item of list" @click="handleChangeCity(item.name)" :key="item.id">{{item.name}}</li>
                    <li class="search-city" v-show="hasNoCity">没有找到匹配数据</li>
                </ul>
            </div>
        </div>
    </div>
    
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:"CitySearch",
    props:["cities"],
    data(){
        return {
            keyworld:"",
            timer:null,
            list:[] //用于存放匹配的城市
        }
    },
    computed:{
        hasNoCity(){
            return !this.list.length
        }
    },
    methods:{
        handleChangeCity(city){
            this.changeCity(city);
            this.$router.push({path:"/"})
        },
        ...mapMutations({
            changeCity:"city/CHANGE_CITY"
        })
    },
    watch:{
        keyworld(val,oldVal){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                const result = []
                for(const key in this.cities){
                    this.cities[key].forEach(item => {
                        if(item.name.indexOf(this.keyworld) != -1 || item.spell.indexOf(this.keyworld) != -1){
                            result.push(item);
                        }
                    });
                }
                this.list = result;
                if(this.keyworld == ""){
                    this.list = []
                }
            },10)
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
        })
    },
    updated(){
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
        })
    }
}
</script>
<style lang="scss" scoped>
    .search-wrap{
        height: rem(50);
        background-color: $bgColor;
        padding: rem(10) rem(25);
        box-sizing: border-box;
        .input-wrap{
            height: rem(30);
            position: relative;
            .search-icon{
                position: absolute;
                left: rem(10);
                top: rem(8);
            }
            .input{
                padding-left: rem(30);
                padding-right: rem(30);
                border-radius: rem(15);
                width: 100%;
                height: rem(30);
                box-sizing: border-box;
                font-size: rem(12);
                border:none;
                color: #333;
            }
        }
    }
    .city-list{
        position: absolute;
        top:rem(100);
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background: #fff;
        overflow: hidden;
        .search-city{
            padding-left: rem(10);
            @include border(#eee);
            font-size: rem(14);
            height: rem(30);
            line-height: rem(30);
        }
    }
</style>


