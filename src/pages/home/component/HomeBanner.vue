<template>
    <div class="banner-wrap">
        <swiper :options="swiperOption" v-if="imglist.length">
		    <!-- slides -->
		    <swiper-slide v-for="item of imglist" :key="item.id">
				<img class="banner-img" :src="item.imgUrl">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
    </div>
</template>
<script>
export default {
    name:"HomeBanner",
    props:["imglist"],
    data(){
        return {
            swiperOption:{
                autoplay:{
                    enabled: true,
                    disableOnInteraction: false,
                    delay: 3000
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                speed:1000,
                loop:true,
                autoplayDisableOnInteraction:false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .banner-wrap /deep/ .swiper-pagination-bullet-active{
        background: #fff;
    }
    .banner-wrap{
        padding: 0 rem(10);
        .banner-img{
            width: 100%;
        }
    }
</style>


