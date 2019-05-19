<template>
    <div class="home-header-top">
        <div class="home-address-wrap">
            <div class="home-address">
                <router-link class="home-desc" to="/city" tag="span">{{city.city}}</router-link>
                <i class="iconfont">&#xe62d;</i>
            </div>
        </div>
    </div>
        
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:"HomeHeader",
    computed:{
        ...mapState({
            city:"city"
        })
    }
}
</script>
<style lang="scss" scoped>
    .home-header-top{
        background: $bgColor;
        padding: rem(16) rem(14);
        font-size: rem(16);
        color: #fff;
        font-weight: bold;
        .home-address{
            width: 40%;
        }
        .home-desc{
            @include ellipsis;
        }
    }
    
</style>



