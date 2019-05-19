<template>
    <div>
        <home-header></home-header>
        <home-search></home-search>
        <home-icon :data="iconList"></home-icon>
        <home-banner :imglist="bannerList"></home-banner>
        <home-recommend></home-recommend>
        <shop-filter></shop-filter>
        <shop-list :shopList="shopList"></shop-list>
    </div>
</template>
<script>
import HomeHeader from './component/HomeHeader'
import HomeSearch from './component/HomeSearch'
import HomeIcon from './component/HomeIcon'
import HomeBanner from './component/HomeBanner'
import HomeRecommend from './component/HomeRecommend'
import ShopFilter from './component/ShopFilter'
import ShopList from './component/ShopList'
export default {
    name:"Home",
    data(){
        return {
            iconList:[],
            bannerList:[],
            shopList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSearch,
        HomeIcon,
        HomeBanner,
        ShopFilter,
        HomeRecommend,
        ShopList
    },
    methods:{
        getInfo(){
            this.$axios.get("/api/iconList.json").then((res)=>{
                var data = res.data.data;
                this.iconList = data;
            })
            this.$axios.get("/api/banner.json").then((res)=>{
                var data = res.data.data;
                this.bannerList = data;
            })
            this.$axios.get("/api/shopList.json").then((res)=>{
                var data = res.data.data;
                this.shopList = data;
            })
        }
    },
    created(){
        this.getInfo()
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/public.scss';

</style>


