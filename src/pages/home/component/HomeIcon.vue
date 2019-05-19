<template>
    <div>
        <div class="icon-wrap">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(page,index) of pages" :key="index">
                    <div class="icon-div">
                        <div v-for="item in page" :key="item.id" class="icon-item">
                            <div class="img-container">
                                <img class="img-item" :src="item.imgUrl" alt="">
                            </div>
                            <div class="img-desc">{{item.icon_name}}</div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeIcon",
    props:{
        data:Array
    },
    data(){
        return {
            swiperOption:{

				}
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.data.forEach((item,index)=>{
                const page = Math.floor(index/10);
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },

}
</script>
<style lang="scss" scoped>
    .icon-wrap{
        height: rem(185);
        .icon-item{
            float: left;
            padding-top: rem(10);
            position: relative;
            text-align: center;
            width: 20%;
            .img-container{
                display: inline-block;
                width: rem(56);
                height: rem(56);
            }
            .img-item{
                width: 100%;
                height: 100%;
            }
            .img-desc{
                font-size: rem(13);
                text-align: center;
                @include ellipsis;
            }
        }
    }
</style>


