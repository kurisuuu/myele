<template>
   <div class="recommend">
        <div class="recommend-header">
            推荐商家
        </div>
     </div> 
</template>
<script>
export default {
    name:"HomeRecommend.vue"
}
</script>
<style lang="scss" scoped>
    .recommend{
        padding: rem(10) rem(10) rem(2) rem(10);
        .recommend-header{
            text-align: center;
            font-size: rem(16);
            position: relative;
            padding: rem(10) 0;
            &:before{
                content: "";
                display: block;
                height: rem(1);
                width: rem(20);
                background: #999;
                position: absolute;
                left: 30%;
                top: 45%;
            }
            &:after{
                display: block;
                content: "";
                height: rem(1);
                width: rem(20);
                background-color: #999;
                position: absolute;
                right: 30%;
                top: 45%;
            }
        }
    }
</style>

