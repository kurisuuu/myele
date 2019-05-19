<template>
    <div class="header">
        <router-link tag="div" to="/" class="back-btn">
            <i class="iconfont">&#xe624;</i>
        </router-link>
        <div class="header-content">
            城市选择
        </div>
    </div>
</template>
<script>
export default {
    name:"CityHeader"
}
</script>
<style lang="scss" scoped>
    .header{
        height: rem(50);
        background-color: $bgColor;
        display: flex;
        color: #fff;
        line-height: rem(50);
        .back-btn{
            width: rem(60);
            text-align: center;
            font-weight: bold;
        }
        .header-content{
            flex: 1;
            text-align: center;
            padding-right: rem(50);
            font-size: rem(18);
        }
    }
</style>


