<template>
    <div class="header">
        <div class="header-wrap">
            <div class="img-wrap">
                <img class="img" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
            </div>
            <div class="desc-wrap">
                <h1 class="desc-title">
                    肯德基
                </h1>
                <p class="desc-send">蜂鸟专送</p>
                <p class="desc-yh">满25-10</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailHeader"
}
</script>
<style lang="scss" scoped>
    .header{
        height: rem(100);
        width: 100%;
        background:url('http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg') no-repeat;
        background-size: cover;
        .header-wrap{
            width: 100%;
            height: 100%;
            background: rgba(7,17,27,0.5);
            display: flex;
            .img-wrap{
                width: rem(108);
                height: rem(80);
                padding: rem(10);
                .img{
                    width: rem(80);
                    height: rem(80);
                    margin-left: rem(28);
                }
            }
            .desc-wrap{
                flex: 1;
                padding: rem(10) rem(10);
                color: #fff;
                .desc-title{
                    font-size: rem(16);
                    font-weight: 700;
                    margin-bottom: rem(10);
                }
                .desc-send{
                    font-size: rem(14);
                    margin-bottom: rem(5)
                }
                .desc-yh{
                    font-size: rem(10);
                }
            }
        }
    }
</style>

